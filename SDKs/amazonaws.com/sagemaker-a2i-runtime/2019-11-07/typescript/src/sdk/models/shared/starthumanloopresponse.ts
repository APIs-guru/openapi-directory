import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartHumanLoopResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLoopArn" })
  humanLoopArn?: string;
}
