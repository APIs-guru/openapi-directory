import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workteam } from "./workteam";



export class ListWorkteamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Workteams", elemType: Workteam })
  workteams: Workteam[];
}
