import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioStream" })
  audioStream?: string;
}
