import { SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceDescription } from "./s3referencedatasourcedescription";
/**
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
**/
export declare class ReferenceDataSourceDescription extends SpeakeasyBase {
    referenceId: string;
    referenceSchema?: SourceSchema;
    s3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
    tableName: string;
}
