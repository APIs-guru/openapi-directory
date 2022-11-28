import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";



export class RegisterContainerImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;
}
