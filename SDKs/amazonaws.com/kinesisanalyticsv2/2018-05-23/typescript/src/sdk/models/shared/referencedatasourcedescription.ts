import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceDescription } from "./s3referencedatasourcedescription";



// ReferenceDataSourceDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
**/
export class ReferenceDataSourceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId: string;

  @SpeakeasyMetadata({ data: "json, name=ReferenceSchema" })
  referenceSchema?: SourceSchema;

  @SpeakeasyMetadata({ data: "json, name=S3ReferenceDataSourceDescription" })
  s3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
