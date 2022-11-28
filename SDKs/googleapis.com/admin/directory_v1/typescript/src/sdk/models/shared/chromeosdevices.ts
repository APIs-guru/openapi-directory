import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChromeOsDevice } from "./chromeosdevice";



export class ChromeOsDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chromeosdevices", elemType: ChromeOsDevice })
  chromeosdevices?: ChromeOsDevice[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
