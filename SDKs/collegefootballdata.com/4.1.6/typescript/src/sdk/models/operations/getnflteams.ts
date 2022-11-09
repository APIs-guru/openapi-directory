import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNflTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DraftTeam })
  draftTeams?: shared.DraftTeam[];

  @Metadata()
  statusCode: number;
}
