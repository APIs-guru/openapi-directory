import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskAddTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}
