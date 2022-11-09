import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Deployment } from "./googlecloudapigeev1deployment";


export class GoogleCloudApigeeV1ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.GoogleCloudApigeeV1Deployment })
  deployments?: GoogleCloudApigeeV1Deployment[];
}
