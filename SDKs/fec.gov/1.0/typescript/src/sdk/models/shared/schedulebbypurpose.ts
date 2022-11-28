import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleBByPurpose extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=memo_count" })
  memoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=memo_total" })
  memoTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
