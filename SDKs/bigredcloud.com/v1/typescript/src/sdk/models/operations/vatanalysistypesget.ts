import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatAnalysisTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultVatAnalysisTypeDto?: shared.PageResultVatAnalysisTypeDto;

  @Metadata()
  statusCode: number;
}
