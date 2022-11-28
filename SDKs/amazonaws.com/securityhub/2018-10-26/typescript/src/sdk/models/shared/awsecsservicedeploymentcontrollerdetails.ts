import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServiceDeploymentControllerDetails
/** 
 * Information about the deployment controller type that the service uses.
**/
export class AwsEcsServiceDeploymentControllerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
