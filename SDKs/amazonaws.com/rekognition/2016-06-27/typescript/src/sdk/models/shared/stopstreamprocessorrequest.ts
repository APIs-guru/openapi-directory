import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopStreamProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
