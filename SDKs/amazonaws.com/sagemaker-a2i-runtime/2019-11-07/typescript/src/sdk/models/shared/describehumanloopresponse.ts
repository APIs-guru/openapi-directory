import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopOutput } from "./humanloopoutput";
import { HumanLoopStatusEnum } from "./humanloopstatusenum";



export class DescribeHumanLoopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureCode" })
  failureCode?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopArn" })
  humanLoopArn: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopName" })
  humanLoopName: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopOutput" })
  humanLoopOutput?: HumanLoopOutput;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopStatus" })
  humanLoopStatus: HumanLoopStatusEnum;
}
