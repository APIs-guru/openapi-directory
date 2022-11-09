import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceUpdate } from "./s3referencedatasourceupdate";
/**
 * When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
**/
export declare class ReferenceDataSourceUpdate extends SpeakeasyBase {
    referenceId: string;
    referenceSchemaUpdate?: SourceSchema;
    s3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
    tableNameUpdate?: string;
}
