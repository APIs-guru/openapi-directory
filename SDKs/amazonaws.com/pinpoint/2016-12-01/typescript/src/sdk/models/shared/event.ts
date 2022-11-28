import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



// Event
/** 
 * Specifies information about an event that reports data to Amazon Pinpoint.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppPackageName" })
  appPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=AppTitle" })
  appTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=AppVersionCode" })
  appVersionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ClientSdkVersion" })
  clientSdkVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=EventType" })
  eventType: string;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=SdkName" })
  sdkName?: string;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: Session;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: string;
}
