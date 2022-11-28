import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusStringEnum } from "./statusstringenum";



export class ListStatementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleLevel" })
  roleLevel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusStringEnum;
}
