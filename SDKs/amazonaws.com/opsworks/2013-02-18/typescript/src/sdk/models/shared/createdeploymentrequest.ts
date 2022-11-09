import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentCommand } from "./deploymentcommand";


export class CreateDeploymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=Command" })
  command: DeploymentCommand;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
