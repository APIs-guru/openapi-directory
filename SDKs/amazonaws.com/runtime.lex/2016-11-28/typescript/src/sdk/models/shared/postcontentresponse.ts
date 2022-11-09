import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioStream" })
  audioStream?: string;
}
