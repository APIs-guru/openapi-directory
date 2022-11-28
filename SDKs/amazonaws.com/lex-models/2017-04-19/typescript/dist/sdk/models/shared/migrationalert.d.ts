import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationAlertTypeEnum } from "./migrationalerttypeenum";
/**
 * Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.
**/
export declare class MigrationAlert extends SpeakeasyBase {
    details?: string[];
    message?: string;
    referenceUrLs?: string[];
    type?: MigrationAlertTypeEnum;
}
