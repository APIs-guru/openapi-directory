import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContainerServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
