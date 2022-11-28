import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelServiceInstanceDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceInstanceName" })
  serviceInstanceName: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
