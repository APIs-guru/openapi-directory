import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_description" })
  groupDescription: string;

  @Metadata({ data: "json, name=group_id" })
  groupId: string;

  @Metadata({ data: "json, name=group_name" })
  groupName: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups })
  groups: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups[];
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  groupMapping?: shared.GroupMapping;
}
