import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
