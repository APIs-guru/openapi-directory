import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskRemoveTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}
