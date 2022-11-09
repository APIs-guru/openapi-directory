import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HumanLoopActivationConfig } from "./humanloopactivationconfig";
import { HumanLoopConfig } from "./humanloopconfig";
import { HumanLoopRequestSource } from "./humanlooprequestsource";
import { FlowDefinitionOutputConfig } from "./flowdefinitionoutputconfig";
import { Tag } from "./tag";


export class CreateFlowDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;

  @Metadata({ data: "json, name=HumanLoopActivationConfig" })
  humanLoopActivationConfig?: HumanLoopActivationConfig;

  @Metadata({ data: "json, name=HumanLoopConfig" })
  humanLoopConfig: HumanLoopConfig;

  @Metadata({ data: "json, name=HumanLoopRequestSource" })
  humanLoopRequestSource?: HumanLoopRequestSource;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: FlowDefinitionOutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
