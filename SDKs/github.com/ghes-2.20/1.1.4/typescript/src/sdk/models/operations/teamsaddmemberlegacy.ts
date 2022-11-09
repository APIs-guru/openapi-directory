import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddMemberLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsAddMemberLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddMemberLegacyPathParams;
}


export class TeamsAddMemberLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
