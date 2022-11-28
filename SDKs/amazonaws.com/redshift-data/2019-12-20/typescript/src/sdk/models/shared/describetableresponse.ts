import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";



export class DescribeTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnList", elemType: ColumnMetadata })
  columnList?: ColumnMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
