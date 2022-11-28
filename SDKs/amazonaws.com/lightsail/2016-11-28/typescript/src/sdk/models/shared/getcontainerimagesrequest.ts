import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
