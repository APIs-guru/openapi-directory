import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Developer } from "./googlecloudapigeev1developer";


export class GoogleCloudApigeeV1ListOfDevelopersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=developer", elemType: shared.GoogleCloudApigeeV1Developer })
  developer?: GoogleCloudApigeeV1Developer[];
}
