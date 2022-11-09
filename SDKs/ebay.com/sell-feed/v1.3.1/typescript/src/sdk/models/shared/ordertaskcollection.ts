import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderTask } from "./ordertask";


// OrderTaskCollection
/** 
 * The type that defines the fields for a paginated result set of orders. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class OrderTaskCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.OrderTask })
  tasks?: OrderTask[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
