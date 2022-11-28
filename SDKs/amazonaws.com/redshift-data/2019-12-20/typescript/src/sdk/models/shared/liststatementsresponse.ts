import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatementData } from "./statementdata";



export class ListStatementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Statements", elemType: StatementData })
  statements: StatementData[];
}
