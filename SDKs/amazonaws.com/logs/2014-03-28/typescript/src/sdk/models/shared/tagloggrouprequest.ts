import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagLogGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
