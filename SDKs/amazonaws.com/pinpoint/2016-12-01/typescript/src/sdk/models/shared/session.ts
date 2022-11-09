import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Session
/** 
 * Provides information about a session.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=StartTimestamp" })
  startTimestamp: string;

  @Metadata({ data: "json, name=StopTimestamp" })
  stopTimestamp?: string;
}
