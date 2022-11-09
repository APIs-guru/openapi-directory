import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusStringEnum } from "./statusstringenum";


export class ListStatementsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RoleLevel" })
  roleLevel?: boolean;

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusStringEnum;
}
