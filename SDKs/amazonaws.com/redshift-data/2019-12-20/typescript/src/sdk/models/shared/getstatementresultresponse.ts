import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnMetadata } from "./columnmetadata";
import { Field } from "./field";


export class GetStatementResultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnMetadata", elemType: shared.ColumnMetadata })
  columnMetadata?: ColumnMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Records", elemType: shared.Field, elemDepth: 2 })
  records: Field[][];

  @Metadata({ data: "json, name=TotalNumRows" })
  totalNumRows?: number;
}
