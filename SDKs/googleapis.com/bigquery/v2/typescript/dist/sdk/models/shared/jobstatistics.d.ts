import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatistics5 } from "./jobstatistics5";
import { DataMaskingStatistics } from "./datamaskingstatistics";
import { JobStatistics4 } from "./jobstatistics4";
import { JobStatistics3 } from "./jobstatistics3";
import { JobStatistics2 } from "./jobstatistics2";
import { RowLevelSecurityStatistics } from "./rowlevelsecuritystatistics";
import { ScriptStatistics } from "./scriptstatistics";
import { SessionInfo } from "./sessioninfo";
import { TransactionInfo } from "./transactioninfo";
export declare class JobStatisticsReservationUsage extends SpeakeasyBase {
    name?: string;
    slotMs?: string;
}
export declare class JobStatistics extends SpeakeasyBase {
    completionRatio?: number;
    copy?: JobStatistics5;
    creationTime?: string;
    dataMaskingStatistics?: DataMaskingStatistics;
    endTime?: string;
    extract?: JobStatistics4;
    load?: JobStatistics3;
    numChildJobs?: string;
    parentJobId?: string;
    query?: JobStatistics2;
    quotaDeferments?: string[];
    reservationUsage?: JobStatisticsReservationUsage[];
    reservationId?: string;
    rowLevelSecurityStatistics?: RowLevelSecurityStatistics;
    scriptStatistics?: ScriptStatistics;
    sessionInfo?: SessionInfo;
    startTime?: string;
    totalBytesProcessed?: string;
    totalSlotMs?: string;
    transactionInfo?: TransactionInfo;
}
