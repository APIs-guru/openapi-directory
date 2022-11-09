import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceUpdate } from "./s3referencedatasourceupdate";


// ReferenceDataSourceUpdate
/** 
 * When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
**/
export class ReferenceDataSourceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReferenceId" })
  referenceId: string;

  @Metadata({ data: "json, name=ReferenceSchemaUpdate" })
  referenceSchemaUpdate?: SourceSchema;

  @Metadata({ data: "json, name=S3ReferenceDataSourceUpdate" })
  s3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  @Metadata({ data: "json, name=TableNameUpdate" })
  tableNameUpdate?: string;
}
