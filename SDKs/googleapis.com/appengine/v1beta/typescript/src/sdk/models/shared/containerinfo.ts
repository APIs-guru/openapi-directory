import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerInfo
/** 
 * Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
**/
export class ContainerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;
}
