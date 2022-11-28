import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Developer } from "./googlecloudapigeev1developer";



export class GoogleCloudApigeeV1ListOfDevelopersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developer", elemType: GoogleCloudApigeeV1Developer })
  developer?: GoogleCloudApigeeV1Developer[];
}
