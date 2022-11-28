import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RdsDatabase } from "./rdsdatabase";



// RdsMetadata
/** 
 * The datasource details that are specific to Amazon RDS.
**/
export class RdsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataPipelineId" })
  dataPipelineId?: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: RdsDatabase;

  @SpeakeasyMetadata({ data: "json, name=DatabaseUserName" })
  databaseUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceRole" })
  resourceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;
}
