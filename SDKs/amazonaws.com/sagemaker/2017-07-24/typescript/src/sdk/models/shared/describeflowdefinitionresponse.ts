import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowDefinitionStatusEnum } from "./flowdefinitionstatusenum";
import { HumanLoopActivationConfig } from "./humanloopactivationconfig";
import { HumanLoopConfig } from "./humanloopconfig";
import { HumanLoopRequestSource } from "./humanlooprequestsource";
import { FlowDefinitionOutputConfig } from "./flowdefinitionoutputconfig";


export class DescribeFlowDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @Metadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;

  @Metadata({ data: "json, name=FlowDefinitionStatus" })
  flowDefinitionStatus: FlowDefinitionStatusEnum;

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
}
