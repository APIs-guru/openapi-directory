import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskAddTagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag: string;
}
