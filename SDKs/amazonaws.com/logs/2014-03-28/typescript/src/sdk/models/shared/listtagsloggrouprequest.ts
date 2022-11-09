import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsLogGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
