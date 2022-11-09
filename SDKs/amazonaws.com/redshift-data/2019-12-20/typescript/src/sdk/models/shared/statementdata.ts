import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlParameter } from "./sqlparameter";
import { StatusStringEnum } from "./statusstringenum";


// StatementData
/** 
 * The SQL statement to run.
**/
export class StatementData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=IsBatchStatement" })
  isBatchStatement?: boolean;

  @Metadata({ data: "json, name=QueryParameters", elemType: shared.SqlParameter })
  queryParameters?: SqlParameter[];

  @Metadata({ data: "json, name=QueryString" })
  queryString?: string;

  @Metadata({ data: "json, name=QueryStrings" })
  queryStrings?: string[];

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusStringEnum;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
