import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
/**
 * The properties of the custom terminology.
**/
export declare class TerminologyProperties extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    description?: string;
    encryptionKey?: EncryptionKey;
    lastUpdatedAt?: Date;
    name?: string;
    sizeBytes?: number;
    sourceLanguageCode?: string;
    targetLanguageCodes?: string[];
    termCount?: number;
}
