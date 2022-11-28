import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProperty } from "./connectionproperty";
import { DatasetReference } from "./datasetreference";
import { QueryParameter } from "./queryparameter";
export declare class QueryRequest extends SpeakeasyBase {
    connectionProperties?: ConnectionProperty[];
    createSession?: boolean;
    defaultDataset?: DatasetReference;
    dryRun?: boolean;
    kind?: string;
    labels?: Map<string, string>;
    location?: string;
    maxResults?: number;
    maximumBytesBilled?: string;
    parameterMode?: string;
    preserveNulls?: boolean;
    query?: string;
    queryParameters?: QueryParameter[];
    requestId?: string;
    timeoutMs?: number;
    useLegacySql?: boolean;
    useQueryCache?: boolean;
}
