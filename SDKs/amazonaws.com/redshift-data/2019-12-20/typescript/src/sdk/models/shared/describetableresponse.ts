import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnMetadata } from "./columnmetadata";


export class DescribeTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnList", elemType: shared.ColumnMetadata })
  columnList?: ColumnMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
