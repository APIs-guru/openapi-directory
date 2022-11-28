import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServiceServiceRegistriesDetails
/** 
 * Information about a service discovery registry to assign to the service.
**/
export class AwsEcsServiceServiceRegistriesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContainerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=RegistryArn" })
  registryArn?: string;
}
