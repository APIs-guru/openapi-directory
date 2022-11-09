import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Record } from "./record";
import { Record } from "./record";


export class WriteRecordsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommonAttributes" })
  commonAttributes?: Record;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=Records", elemType: shared.Record })
  records: Record[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
