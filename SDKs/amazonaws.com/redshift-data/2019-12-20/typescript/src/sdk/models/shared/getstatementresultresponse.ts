import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";
import { Field } from "./field";



export class GetStatementResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnMetadata", elemType: ColumnMetadata })
  columnMetadata?: ColumnMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Field, elemDepth: 2 })
  records: Field[][];

  @SpeakeasyMetadata({ data: "json, name=TotalNumRows" })
  totalNumRows?: number;
}
