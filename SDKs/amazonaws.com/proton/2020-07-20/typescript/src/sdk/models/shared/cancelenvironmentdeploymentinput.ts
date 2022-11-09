import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelEnvironmentDeploymentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentName" })
  environmentName: string;
}
