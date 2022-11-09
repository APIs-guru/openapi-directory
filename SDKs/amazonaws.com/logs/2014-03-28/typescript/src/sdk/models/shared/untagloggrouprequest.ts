import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagLogGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=tags" })
  tags: string[];
}
