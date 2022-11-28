import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=group_description" })
  groupDescription: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=group_name" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups })
  groups: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups[];

  @SpeakeasyMetadata({ data: "json, name=synced_at" })
  syncedAt?: string;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody;
}


export class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  groupMapping?: shared.GroupMapping;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
