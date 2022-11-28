import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
export declare class JobConfigurationTableCopy extends SpeakeasyBase {
    createDisposition?: string;
    destinationEncryptionConfiguration?: EncryptionConfiguration;
    destinationExpirationTime?: any;
    destinationTable?: TableReference;
    operationType?: string;
    sourceTable?: TableReference;
    sourceTables?: TableReference[];
    writeDisposition?: string;
}
