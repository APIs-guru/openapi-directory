import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagLogGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
