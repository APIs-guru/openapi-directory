import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceDescription } from "./s3referencedatasourcedescription";


// ReferenceDataSourceDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
**/
export class ReferenceDataSourceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReferenceId" })
  referenceId: string;

  @Metadata({ data: "json, name=ReferenceSchema" })
  referenceSchema?: SourceSchema;

  @Metadata({ data: "json, name=S3ReferenceDataSourceDescription" })
  s3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
