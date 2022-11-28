import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatTypesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultVatTypeDto?: shared.PageResultVatTypeDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
