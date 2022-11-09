import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultCustomerQueryDto?: shared.PageResultCustomerQueryDto;

  @Metadata()
  statusCode: number;
}
