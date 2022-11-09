import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Order } from "./order";
import { Error } from "./error";


// OrderSearchPagedCollection
/** 
 * This type contains the specifications for the collection of orders that match the search or filter criteria of a getOrders call. The collection is grouped into a result set, and based on the query parameters that are set (including the limit and offset parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.
**/
export class OrderSearchPagedCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=orders", elemType: shared.Order })
  orders?: Order[];

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
