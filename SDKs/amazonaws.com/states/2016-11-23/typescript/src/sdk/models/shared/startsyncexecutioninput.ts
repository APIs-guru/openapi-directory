import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartSyncExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @Metadata({ data: "json, name=traceHeader" })
  traceHeader?: string;
}
