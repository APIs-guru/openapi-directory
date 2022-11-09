import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute
/** 
 * Route deployed in the ingress routing table.
**/
export class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=basepath" })
  basepath?: string;

  @Metadata({ data: "json, name=envgroup" })
  envgroup?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;
}
