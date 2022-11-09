import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=executionArn" })
  executionArn: string;
}
