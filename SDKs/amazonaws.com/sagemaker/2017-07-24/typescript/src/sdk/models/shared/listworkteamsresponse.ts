import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workteam } from "./workteam";


export class ListWorkteamsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Workteams", elemType: shared.Workteam })
  workteams: Workteam[];
}
