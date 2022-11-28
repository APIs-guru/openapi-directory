import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Deployment } from "./googlecloudapigeev1deployment";



export class GoogleCloudApigeeV1ListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: GoogleCloudApigeeV1Deployment })
  deployments?: GoogleCloudApigeeV1Deployment[];
}
