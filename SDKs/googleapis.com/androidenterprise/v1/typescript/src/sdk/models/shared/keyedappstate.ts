import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KeyedAppStateSeverityEnum {
    SeverityUnknown = "severityUnknown",
    SeverityInfo = "severityInfo",
    SeverityError = "severityError"
}


// KeyedAppState
/** 
 * Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
**/
export class KeyedAppState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: KeyedAppStateSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=stateTimestampMillis" })
  stateTimestampMillis?: string;
}
