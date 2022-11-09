import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Database
/** 
 * A top level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
**/
export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=TableCount" })
  tableCount?: number;
}
