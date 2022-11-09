import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRetentionPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=retentionInDays" })
  retentionInDays: number;
}
