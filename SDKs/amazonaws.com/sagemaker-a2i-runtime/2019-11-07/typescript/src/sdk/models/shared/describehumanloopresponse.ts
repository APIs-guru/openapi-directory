import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HumanLoopOutput } from "./humanloopoutput";
import { HumanLoopStatusEnum } from "./humanloopstatusenum";


export class DescribeHumanLoopResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureCode" })
  failureCode?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @Metadata({ data: "json, name=HumanLoopArn" })
  humanLoopArn: string;

  @Metadata({ data: "json, name=HumanLoopName" })
  humanLoopName: string;

  @Metadata({ data: "json, name=HumanLoopOutput" })
  humanLoopOutput?: HumanLoopOutput;

  @Metadata({ data: "json, name=HumanLoopStatus" })
  humanLoopStatus: HumanLoopStatusEnum;
}
