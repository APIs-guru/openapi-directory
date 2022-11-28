import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Session } from "./googlecloudapigeev1session";



export class GoogleCloudApigeeV1ListDebugSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: GoogleCloudApigeeV1Session })
  sessions?: GoogleCloudApigeeV1Session[];
}
