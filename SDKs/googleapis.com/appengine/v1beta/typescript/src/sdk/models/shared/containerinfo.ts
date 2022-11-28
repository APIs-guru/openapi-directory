import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerInfo
/** 
 * Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
**/
export class ContainerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;
}
