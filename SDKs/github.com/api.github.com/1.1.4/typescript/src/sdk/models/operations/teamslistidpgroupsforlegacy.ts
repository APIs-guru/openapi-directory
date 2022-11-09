import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListIdpGroupsForLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsListIdpGroupsForLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListIdpGroupsForLegacyPathParams;
}


export class TeamsListIdpGroupsForLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  groupMapping?: shared.GroupMapping;
}
