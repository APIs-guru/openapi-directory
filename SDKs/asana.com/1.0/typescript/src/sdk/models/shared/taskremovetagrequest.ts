import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskRemoveTagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag: string;
}
