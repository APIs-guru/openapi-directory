import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartHumanLoopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopArn" })
  humanLoopArn?: string;
}
