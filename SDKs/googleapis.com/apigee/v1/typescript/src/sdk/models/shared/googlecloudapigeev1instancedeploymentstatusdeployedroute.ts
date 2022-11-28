import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute
/** 
 * Route deployed in the ingress routing table.
**/
export class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basepath" })
  basepath?: string;

  @SpeakeasyMetadata({ data: "json, name=envgroup" })
  envgroup?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}
