import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleBByRecipientId extends SpeakeasyBase {
  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cycle" })
  cycle: number;

  @Metadata({ data: "json, name=memo_count" })
  memoCount?: number;

  @Metadata({ data: "json, name=memo_total" })
  memoTotal?: number;

  @Metadata({ data: "json, name=recipient_id" })
  recipientId: string;

  @Metadata({ data: "json, name=recipient_name" })
  recipientName?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
