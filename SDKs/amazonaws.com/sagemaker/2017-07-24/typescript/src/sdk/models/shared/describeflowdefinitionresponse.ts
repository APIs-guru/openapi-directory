import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionStatusEnum } from "./flowdefinitionstatusenum";
import { HumanLoopActivationConfig } from "./humanloopactivationconfig";
import { HumanLoopConfig } from "./humanloopconfig";
import { HumanLoopRequestSource } from "./humanlooprequestsource";
import { FlowDefinitionOutputConfig } from "./flowdefinitionoutputconfig";



export class DescribeFlowDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionStatus" })
  flowDefinitionStatus: FlowDefinitionStatusEnum;

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
}
