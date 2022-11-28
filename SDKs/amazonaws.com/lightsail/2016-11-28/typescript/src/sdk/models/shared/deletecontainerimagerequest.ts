import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContainerImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
