import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultVatTypeDto?: shared.PageResultVatTypeDto;

  @Metadata()
  statusCode: number;
}
