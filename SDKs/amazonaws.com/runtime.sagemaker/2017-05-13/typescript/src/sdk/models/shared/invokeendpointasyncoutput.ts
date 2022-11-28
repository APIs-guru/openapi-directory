import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvokeEndpointAsyncOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceId" })
  inferenceId?: string;
}
