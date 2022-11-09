import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartStreamProcessorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
