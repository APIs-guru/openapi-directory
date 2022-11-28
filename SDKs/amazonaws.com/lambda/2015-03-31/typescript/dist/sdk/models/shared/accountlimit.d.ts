import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
**/
export declare class AccountLimit extends SpeakeasyBase {
    codeSizeUnzipped?: number;
    codeSizeZipped?: number;
    concurrentExecutions?: number;
    totalCodeSize?: number;
    unreservedConcurrentExecutions?: number;
}
