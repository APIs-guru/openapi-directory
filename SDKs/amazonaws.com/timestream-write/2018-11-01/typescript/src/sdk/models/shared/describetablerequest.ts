import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
