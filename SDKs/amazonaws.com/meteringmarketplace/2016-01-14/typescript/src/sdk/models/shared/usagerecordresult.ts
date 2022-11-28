import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordResultStatusEnum } from "./usagerecordresultstatusenum";
import { UsageRecord } from "./usagerecord";



// UsageRecordResult
/** 
 * A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
**/
export class UsageRecordResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeteringRecordId" })
  meteringRecordId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UsageRecordResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UsageRecord" })
  usageRecord?: UsageRecord;
}
