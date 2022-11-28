import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTagsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
