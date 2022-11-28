import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppSpecification
/** 
 * Configuration to run a processing job in a specified container image.
**/
export class AppSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerArguments" })
  containerArguments?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContainerEntrypoint" })
  containerEntrypoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri: string;
}
