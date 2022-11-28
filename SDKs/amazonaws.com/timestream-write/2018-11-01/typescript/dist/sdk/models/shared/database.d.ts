import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A top level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
**/
export declare class Database extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    databaseName?: string;
    kmsKeyId?: string;
    lastUpdatedTime?: Date;
    tableCount?: number;
}
