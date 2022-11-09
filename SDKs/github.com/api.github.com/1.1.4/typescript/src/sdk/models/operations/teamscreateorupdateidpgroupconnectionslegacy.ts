import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=group_description" })
  groupDescription: string;

  @Metadata({ data: "json, name=group_id" })
  groupId: string;

  @Metadata({ data: "json, name=group_name" })
  groupName: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups })
  groups: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups[];

  @Metadata({ data: "json, name=synced_at" })
  syncedAt?: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  groupMapping?: shared.GroupMapping;

  @Metadata()
  validationError?: shared.ValidationError;
}
