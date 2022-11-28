import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeveloperApp } from "./googlecloudapigeev1developerapp";



export class GoogleCloudApigeeV1ListDeveloperAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app", elemType: GoogleCloudApigeeV1DeveloperApp })
  app?: GoogleCloudApigeeV1DeveloperApp[];
}
