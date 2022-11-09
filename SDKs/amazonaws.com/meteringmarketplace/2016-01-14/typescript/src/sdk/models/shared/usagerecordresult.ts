import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRecordResultStatusEnum } from "./usagerecordresultstatusenum";
import { UsageRecord } from "./usagerecord";


// UsageRecordResult
/** 
 * A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
**/
export class UsageRecordResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeteringRecordId" })
  meteringRecordId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: UsageRecordResultStatusEnum;

  @Metadata({ data: "json, name=UsageRecord" })
  usageRecord?: UsageRecord;
}
