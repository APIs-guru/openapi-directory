import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerServiceDeploymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
