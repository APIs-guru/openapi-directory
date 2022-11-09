import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppSpecification
/** 
 * Configuration to run a processing job in a specified container image.
**/
export class AppSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerArguments" })
  containerArguments?: string[];

  @Metadata({ data: "json, name=ContainerEntrypoint" })
  containerEntrypoint?: string[];

  @Metadata({ data: "json, name=ImageUri" })
  imageUri: string;
}
