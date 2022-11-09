import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserScheduleResponse } from "./userscheduleresponse";


// UserScheduleCollection
/** 
 * The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class UserScheduleCollection extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=schedules", elemType: shared.UserScheduleResponse })
  schedules?: UserScheduleResponse[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
