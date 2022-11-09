import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment
/** 
 * Tuple representing a base path and the deployment containing it.
**/
export class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProxy" })
  apiProxy?: string;

  @Metadata({ data: "json, name=basepath" })
  basepath?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string;
}
