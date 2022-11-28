import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_description" })
  groupDescription: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=group_name" })
  groupName: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups })
  groups: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups[];
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  groupMapping?: shared.GroupMapping;
}
