import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRetentionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=retentionInDays" })
  retentionInDays: number;
}
