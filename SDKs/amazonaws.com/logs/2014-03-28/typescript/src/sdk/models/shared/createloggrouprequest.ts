import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLogGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
