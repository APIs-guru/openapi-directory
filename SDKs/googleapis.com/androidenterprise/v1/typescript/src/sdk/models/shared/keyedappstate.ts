import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KeyedAppStateSeverityEnum {
    SeverityUnknown = "severityUnknown"
,    SeverityInfo = "severityInfo"
,    SeverityError = "severityError"
}


// KeyedAppState
/** 
 * Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
**/
export class KeyedAppState extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: KeyedAppStateSeverityEnum;

  @Metadata({ data: "json, name=stateTimestampMillis" })
  stateTimestampMillis?: string;
}
