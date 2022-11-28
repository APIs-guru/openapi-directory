import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HookEvent } from "./hookevent";



// PaginatedHookEvents
/** 
 * A paginated list of webhook types available to subscribe on.
**/
export class PaginatedHookEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: HookEvent })
  values?: HookEvent[];
}
