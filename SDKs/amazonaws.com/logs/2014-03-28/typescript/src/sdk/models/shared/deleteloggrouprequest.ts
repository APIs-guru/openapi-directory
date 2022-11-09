import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLogGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
