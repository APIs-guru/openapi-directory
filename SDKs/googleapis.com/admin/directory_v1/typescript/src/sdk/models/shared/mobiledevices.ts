import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileDevice } from "./mobiledevice";


export class MobileDevices extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mobiledevices", elemType: shared.MobileDevice })
  mobiledevices?: MobileDevice[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
