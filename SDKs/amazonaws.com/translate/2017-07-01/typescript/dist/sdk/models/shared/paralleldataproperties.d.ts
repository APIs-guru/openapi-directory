import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
import { ParallelDataConfig } from "./paralleldataconfig";
/**
 * The properties of a parallel data resource.
**/
export declare class ParallelDataProperties extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    description?: string;
    encryptionKey?: EncryptionKey;
    failedRecordCount?: number;
    importedDataSize?: number;
    importedRecordCount?: number;
    lastUpdatedAt?: Date;
    latestUpdateAttemptAt?: Date;
    latestUpdateAttemptStatus?: ParallelDataStatusEnum;
    message?: string;
    name?: string;
    parallelDataConfig?: ParallelDataConfig;
    skippedRecordCount?: number;
    sourceLanguageCode?: string;
    status?: ParallelDataStatusEnum;
    targetLanguageCodes?: string[];
}
