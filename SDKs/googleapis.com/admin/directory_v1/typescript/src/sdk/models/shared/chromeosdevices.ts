import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChromeOsDevice } from "./chromeosdevice";


export class ChromeOsDevices extends SpeakeasyBase {
  @Metadata({ data: "json, name=chromeosdevices", elemType: shared.ChromeOsDevice })
  chromeosdevices?: ChromeOsDevice[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
