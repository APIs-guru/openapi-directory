import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatistics5 } from "./jobstatistics5";
import { DataMaskingStatistics } from "./datamaskingstatistics";
import { JobStatistics4 } from "./jobstatistics4";
import { JobStatistics3 } from "./jobstatistics3";
import { JobStatistics2 } from "./jobstatistics2";
import { RowLevelSecurityStatistics } from "./rowlevelsecuritystatistics";
import { ScriptStatistics } from "./scriptstatistics";
import { SessionInfo } from "./sessioninfo";
import { TransactionInfo } from "./transactioninfo";



export class JobStatisticsReservationUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slotMs" })
  slotMs?: string;
}


export class JobStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionRatio" })
  completionRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=copy" })
  copy?: JobStatistics5;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataMaskingStatistics" })
  dataMaskingStatistics?: DataMaskingStatistics;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=extract" })
  extract?: JobStatistics4;

  @SpeakeasyMetadata({ data: "json, name=load" })
  load?: JobStatistics3;

  @SpeakeasyMetadata({ data: "json, name=numChildJobs" })
  numChildJobs?: string;

  @SpeakeasyMetadata({ data: "json, name=parentJobId" })
  parentJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: JobStatistics2;

  @SpeakeasyMetadata({ data: "json, name=quotaDeferments" })
  quotaDeferments?: string[];

  @SpeakeasyMetadata({ data: "json, name=reservationUsage", elemType: JobStatisticsReservationUsage })
  reservationUsage?: JobStatisticsReservationUsage[];

  @SpeakeasyMetadata({ data: "json, name=reservation_id" })
  reservationId?: string;

  @SpeakeasyMetadata({ data: "json, name=rowLevelSecurityStatistics" })
  rowLevelSecurityStatistics?: RowLevelSecurityStatistics;

  @SpeakeasyMetadata({ data: "json, name=scriptStatistics" })
  scriptStatistics?: ScriptStatistics;

  @SpeakeasyMetadata({ data: "json, name=sessionInfo" })
  sessionInfo?: SessionInfo;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=totalBytesProcessed" })
  totalBytesProcessed?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSlotMs" })
  totalSlotMs?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionInfo" })
  transactionInfo?: TransactionInfo;
}
