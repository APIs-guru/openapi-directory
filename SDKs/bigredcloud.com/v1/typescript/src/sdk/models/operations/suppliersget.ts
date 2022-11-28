import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuppliersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultSupplierQueryDto?: shared.PageResultSupplierQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
