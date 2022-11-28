import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatAnalysisTypesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultVatAnalysisTypeDto?: shared.PageResultVatAnalysisTypeDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
