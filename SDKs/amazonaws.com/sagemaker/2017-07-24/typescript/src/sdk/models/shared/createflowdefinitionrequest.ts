import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopActivationConfig } from "./humanloopactivationconfig";
import { HumanLoopConfig } from "./humanloopconfig";
import { HumanLoopRequestSource } from "./humanlooprequestsource";
import { FlowDefinitionOutputConfig } from "./flowdefinitionoutputconfig";
import { Tag } from "./tag";



export class CreateFlowDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationConfig" })
  humanLoopActivationConfig?: HumanLoopActivationConfig;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopConfig" })
  humanLoopConfig: HumanLoopConfig;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopRequestSource" })
  humanLoopRequestSource?: HumanLoopRequestSource;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: FlowDefinitionOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
