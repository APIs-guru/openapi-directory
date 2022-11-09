import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContainerImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
