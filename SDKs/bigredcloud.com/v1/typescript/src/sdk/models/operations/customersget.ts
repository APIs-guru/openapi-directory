import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultCustomerQueryDto?: shared.PageResultCustomerQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
