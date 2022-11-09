import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopStreamProcessorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
