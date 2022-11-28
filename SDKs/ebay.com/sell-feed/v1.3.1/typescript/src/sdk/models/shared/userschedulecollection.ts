import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserScheduleResponse } from "./userscheduleresponse";



// UserScheduleCollection
/** 
 * The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class UserScheduleCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=schedules", elemType: UserScheduleResponse })
  schedules?: UserScheduleResponse[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
