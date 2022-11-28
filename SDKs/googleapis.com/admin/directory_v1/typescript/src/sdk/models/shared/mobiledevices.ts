import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileDevice } from "./mobiledevice";



export class MobileDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mobiledevices", elemType: MobileDevice })
  mobiledevices?: MobileDevice[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
