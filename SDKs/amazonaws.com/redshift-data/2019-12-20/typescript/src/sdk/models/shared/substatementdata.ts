import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatementStatusStringEnum } from "./statementstatusstringenum";



// SubStatementData
/** 
 * Information about an SQL statement.
**/
export class SubStatementData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=HasResultSet" })
  hasResultSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=RedshiftQueryId" })
  redshiftQueryId?: number;

  @SpeakeasyMetadata({ data: "json, name=ResultRows" })
  resultRows?: number;

  @SpeakeasyMetadata({ data: "json, name=ResultSize" })
  resultSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatementStatusStringEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
