import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNflTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DraftTeam })
  draftTeams?: shared.DraftTeam[];

  @SpeakeasyMetadata()
  statusCode: number;
}
