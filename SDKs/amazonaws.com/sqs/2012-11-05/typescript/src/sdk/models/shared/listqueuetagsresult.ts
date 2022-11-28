import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListQueueTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  tags?: Map<string, string>;
}
