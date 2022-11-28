import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionProperties } from "./retentionproperties";



export class UpdateTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionProperties" })
  retentionProperties: RetentionProperties;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
