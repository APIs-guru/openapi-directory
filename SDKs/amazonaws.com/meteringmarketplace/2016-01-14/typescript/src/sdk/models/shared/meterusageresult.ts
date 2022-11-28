import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeterUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeteringRecordId" })
  meteringRecordId?: string;
}
