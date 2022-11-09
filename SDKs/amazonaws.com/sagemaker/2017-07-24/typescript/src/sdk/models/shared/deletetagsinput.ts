import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTagsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
