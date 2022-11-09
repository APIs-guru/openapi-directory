import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServiceServiceRegistriesDetails
/** 
 * Information about a service discovery registry to assign to the service.
**/
export class AwsEcsServiceServiceRegistriesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName?: string;

  @Metadata({ data: "json, name=ContainerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;
}
