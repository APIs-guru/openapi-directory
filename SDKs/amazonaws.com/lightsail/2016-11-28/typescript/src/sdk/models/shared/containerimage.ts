import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerImage
/** 
 * Describes a container image that is registered to an Amazon Lightsail container service.
**/
export class ContainerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;
}
