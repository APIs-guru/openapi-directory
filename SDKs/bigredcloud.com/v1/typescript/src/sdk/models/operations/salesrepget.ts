import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesRepGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultSaleRepsDto?: shared.PageResultSaleRepsDto;

  @Metadata()
  statusCode: number;
}
