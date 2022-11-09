import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Task } from "./task";


// TaskCollection
/** 
 * The type that defines the fields for a paginated result set of tasks. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class TaskCollection extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: Task[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
