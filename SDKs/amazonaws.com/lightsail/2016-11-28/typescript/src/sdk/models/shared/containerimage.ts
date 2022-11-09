import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerImage
/** 
 * Describes a container image that is registered to an Amazon Lightsail container service.
**/
export class ContainerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;
}
