import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";


// Event
/** 
 * Specifies information about an event that reports data to Amazon Pinpoint.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppPackageName" })
  appPackageName?: string;

  @Metadata({ data: "json, name=AppTitle" })
  appTitle?: string;

  @Metadata({ data: "json, name=AppVersionCode" })
  appVersionCode?: string;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=ClientSdkVersion" })
  clientSdkVersion?: string;

  @Metadata({ data: "json, name=EventType" })
  eventType: string;

  @Metadata({ data: "json, name=Metrics" })
  metrics?: Map<string, number>;

  @Metadata({ data: "json, name=SdkName" })
  sdkName?: string;

  @Metadata({ data: "json, name=Session" })
  session?: Session;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: string;
}
