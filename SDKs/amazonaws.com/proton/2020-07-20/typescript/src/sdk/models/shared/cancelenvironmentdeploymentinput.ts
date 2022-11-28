import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelEnvironmentDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentName" })
  environmentName: string;
}
