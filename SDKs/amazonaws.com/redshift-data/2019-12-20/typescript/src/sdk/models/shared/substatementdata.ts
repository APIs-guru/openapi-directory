import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatementStatusStringEnum } from "./statementstatusstringenum";


// SubStatementData
/** 
 * Information about an SQL statement.
**/
export class SubStatementData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=HasResultSet" })
  hasResultSet?: boolean;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=QueryString" })
  queryString?: string;

  @Metadata({ data: "json, name=RedshiftQueryId" })
  redshiftQueryId?: number;

  @Metadata({ data: "json, name=ResultRows" })
  resultRows?: number;

  @Metadata({ data: "json, name=ResultSize" })
  resultSize?: number;

  @Metadata({ data: "json, name=Status" })
  status?: StatementStatusStringEnum;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
