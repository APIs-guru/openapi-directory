import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
