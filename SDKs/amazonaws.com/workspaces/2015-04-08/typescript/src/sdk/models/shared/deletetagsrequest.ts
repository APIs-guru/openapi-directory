import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
