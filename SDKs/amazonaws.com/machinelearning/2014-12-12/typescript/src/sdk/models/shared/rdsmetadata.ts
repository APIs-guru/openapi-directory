import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsDatabase } from "./rdsdatabase";


// RdsMetadata
/** 
 * The datasource details that are specific to Amazon RDS.
**/
export class RdsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataPipelineId" })
  dataPipelineId?: string;

  @Metadata({ data: "json, name=Database" })
  database?: RdsDatabase;

  @Metadata({ data: "json, name=DatabaseUserName" })
  databaseUserName?: string;

  @Metadata({ data: "json, name=ResourceRole" })
  resourceRole?: string;

  @Metadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery?: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;
}
