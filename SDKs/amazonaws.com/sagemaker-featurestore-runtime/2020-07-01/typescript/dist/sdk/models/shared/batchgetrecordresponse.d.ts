import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchGetRecordError } from "./batchgetrecorderror";
import { BatchGetRecordResultDetail } from "./batchgetrecordresultdetail";
import { BatchGetRecordIdentifier } from "./batchgetrecordidentifier";
export declare class BatchGetRecordResponse extends SpeakeasyBase {
    errors: BatchGetRecordError[];
    records: BatchGetRecordResultDetail[];
    unprocessedIdentifiers: BatchGetRecordIdentifier[];
}
