import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1DeveloperApp } from "./googlecloudapigeev1developerapp";


export class GoogleCloudApigeeV1ListDeveloperAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=app", elemType: shared.GoogleCloudApigeeV1DeveloperApp })
  app?: GoogleCloudApigeeV1DeveloperApp[];
}
