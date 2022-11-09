import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KeyedAppStateSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Error = "ERROR"
}


// KeyedAppState
/** 
 * Keyed app state reported by the app.
**/
export class KeyedAppState extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: KeyedAppStateSeverityEnum;
}
