import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerImage } from "./containerimage";


export class GetContainerImagesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerImages", elemType: shared.ContainerImage })
  containerImages?: ContainerImage[];
}
