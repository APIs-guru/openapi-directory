import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContainerServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
