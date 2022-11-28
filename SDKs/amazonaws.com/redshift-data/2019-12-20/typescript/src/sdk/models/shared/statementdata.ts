import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlParameter } from "./sqlparameter";
import { StatusStringEnum } from "./statusstringenum";



// StatementData
/** 
 * The SQL statement to run.
**/
export class StatementData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=IsBatchStatement" })
  isBatchStatement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=QueryParameters", elemType: SqlParameter })
  queryParameters?: SqlParameter[];

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryStrings" })
  queryStrings?: string[];

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusStringEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
