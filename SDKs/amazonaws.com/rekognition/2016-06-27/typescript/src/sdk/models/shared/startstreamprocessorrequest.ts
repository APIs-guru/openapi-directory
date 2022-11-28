import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartStreamProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
