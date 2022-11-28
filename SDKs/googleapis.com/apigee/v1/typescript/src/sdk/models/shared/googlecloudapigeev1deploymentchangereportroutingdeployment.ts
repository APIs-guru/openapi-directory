import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment
/** 
 * Tuple representing a base path and the deployment containing it.
**/
export class GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProxy" })
  apiProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=basepath" })
  basepath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
