import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvokeEndpointAsyncOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceId" })
  inferenceId?: string;
}
