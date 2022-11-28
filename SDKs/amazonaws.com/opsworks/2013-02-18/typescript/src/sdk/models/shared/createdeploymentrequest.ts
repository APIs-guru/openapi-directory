import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCommand } from "./deploymentcommand";



export class CreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=Command" })
  command: DeploymentCommand;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
