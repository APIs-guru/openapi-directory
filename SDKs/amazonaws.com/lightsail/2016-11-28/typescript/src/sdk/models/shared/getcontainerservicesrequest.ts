import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainerServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
