import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServiceDeploymentControllerDetails
/** 
 * Information about the deployment controller type that the service uses.
**/
export class AwsEcsServiceDeploymentControllerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;
}
