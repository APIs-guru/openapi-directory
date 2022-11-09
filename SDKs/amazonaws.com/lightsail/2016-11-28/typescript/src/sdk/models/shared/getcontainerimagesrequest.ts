import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainerImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
