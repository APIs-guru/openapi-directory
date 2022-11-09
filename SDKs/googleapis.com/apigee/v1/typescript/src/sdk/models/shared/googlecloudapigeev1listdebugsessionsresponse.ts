import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Session } from "./googlecloudapigeev1session";


export class GoogleCloudApigeeV1ListDebugSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sessions", elemType: shared.GoogleCloudApigeeV1Session })
  sessions?: GoogleCloudApigeeV1Session[];
}
