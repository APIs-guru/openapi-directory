import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatementData } from "./statementdata";


export class ListStatementsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Statements", elemType: shared.StatementData })
  statements: StatementData[];
}
