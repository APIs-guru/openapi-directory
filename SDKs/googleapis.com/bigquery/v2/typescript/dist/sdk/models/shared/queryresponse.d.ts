import { SpeakeasyBase } from "../../../internal/utils";
import { DmlStatistics } from "./dmlstatistics";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { TableRow } from "./tablerow";
import { TableSchema } from "./tableschema";
import { SessionInfo } from "./sessioninfo";
export declare class QueryResponse extends SpeakeasyBase {
    cacheHit?: boolean;
    dmlStats?: DmlStatistics;
    errors?: ErrorProto[];
    jobComplete?: boolean;
    jobReference?: JobReference;
    kind?: string;
    numDmlAffectedRows?: string;
    pageToken?: string;
    rows?: TableRow[];
    schema?: TableSchema;
    sessionInfo?: SessionInfo;
    totalBytesProcessed?: string;
    totalRows?: string;
}
