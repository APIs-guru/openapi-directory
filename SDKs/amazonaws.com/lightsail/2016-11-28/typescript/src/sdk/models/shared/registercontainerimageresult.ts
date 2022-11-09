import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerImage } from "./containerimage";


export class RegisterContainerImageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;
}
