import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MeterUsageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeteringRecordId" })
  meteringRecordId?: string;
}
