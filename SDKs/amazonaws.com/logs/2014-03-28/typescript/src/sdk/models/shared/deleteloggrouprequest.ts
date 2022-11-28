import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLogGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
