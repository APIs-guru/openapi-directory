import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { TableRow } from "./tablerow";
import { TableSchema } from "./tableschema";
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    cacheHit?: boolean;
    errors?: ErrorProto[];
    etag?: string;
    jobComplete?: boolean;
    jobReference?: JobReference;
    kind?: string;
    numDmlAffectedRows?: string;
    pageToken?: string;
    rows?: TableRow[];
    schema?: TableSchema;
    totalBytesProcessed?: string;
    totalRows?: string;
}
