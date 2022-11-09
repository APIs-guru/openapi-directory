import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HookEvent } from "./hookevent";


// PaginatedHookEvents
/** 
 * A paginated list of webhook types available to subscribe on.
**/
export class PaginatedHookEvents extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=values", elemType: shared.HookEvent })
  values?: HookEvent[];
}
