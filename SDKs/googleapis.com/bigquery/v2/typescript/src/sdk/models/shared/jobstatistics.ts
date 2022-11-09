import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slotMs" })
  slotMs?: string;
}


export class JobStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionRatio" })
  completionRatio?: number;

  @Metadata({ data: "json, name=copy" })
  copy?: JobStatistics5;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=dataMaskingStatistics" })
  dataMaskingStatistics?: DataMaskingStatistics;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=extract" })
  extract?: JobStatistics4;

  @Metadata({ data: "json, name=load" })
  load?: JobStatistics3;

  @Metadata({ data: "json, name=numChildJobs" })
  numChildJobs?: string;

  @Metadata({ data: "json, name=parentJobId" })
  parentJobId?: string;

  @Metadata({ data: "json, name=query" })
  query?: JobStatistics2;

  @Metadata({ data: "json, name=quotaDeferments" })
  quotaDeferments?: string[];

  @Metadata({ data: "json, name=reservationUsage", elemType: shared.JobStatisticsReservationUsage })
  reservationUsage?: JobStatisticsReservationUsage[];

  @Metadata({ data: "json, name=reservation_id" })
  reservationId?: string;

  @Metadata({ data: "json, name=rowLevelSecurityStatistics" })
  rowLevelSecurityStatistics?: RowLevelSecurityStatistics;

  @Metadata({ data: "json, name=scriptStatistics" })
  scriptStatistics?: ScriptStatistics;

  @Metadata({ data: "json, name=sessionInfo" })
  sessionInfo?: SessionInfo;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=totalBytesProcessed" })
  totalBytesProcessed?: string;

  @Metadata({ data: "json, name=totalSlotMs" })
  totalSlotMs?: string;

  @Metadata({ data: "json, name=transactionInfo" })
  transactionInfo?: TransactionInfo;
}
