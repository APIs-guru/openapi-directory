import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";



export class GetContainerImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerImages", elemType: ContainerImage })
  containerImages?: ContainerImage[];
}
