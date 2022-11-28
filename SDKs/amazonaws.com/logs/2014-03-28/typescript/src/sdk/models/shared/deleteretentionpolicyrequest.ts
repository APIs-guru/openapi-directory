import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRetentionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
