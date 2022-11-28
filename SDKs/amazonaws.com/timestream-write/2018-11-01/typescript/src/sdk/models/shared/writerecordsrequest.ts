import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";



export class WriteRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommonAttributes" })
  commonAttributes?: Record;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Record })
  records: Record[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
