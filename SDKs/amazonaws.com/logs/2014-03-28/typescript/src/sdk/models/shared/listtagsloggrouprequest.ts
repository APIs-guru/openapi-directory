import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsLogGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
