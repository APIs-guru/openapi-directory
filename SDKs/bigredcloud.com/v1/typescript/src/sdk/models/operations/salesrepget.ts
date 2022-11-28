import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesRepGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultSaleRepsDto?: shared.PageResultSaleRepsDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
