import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultSupplierQueryDto?: shared.PageResultSupplierQueryDto;

  @Metadata()
  statusCode: number;
}
