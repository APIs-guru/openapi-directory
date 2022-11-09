import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WaitTime
/** 
 * Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.
**/
export class WaitTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=WaitFor" })
  waitFor?: string;

  @Metadata({ data: "json, name=WaitUntil" })
  waitUntil?: string;
}
