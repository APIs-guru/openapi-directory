import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=traceHeader" })
  traceHeader?: string;
}
