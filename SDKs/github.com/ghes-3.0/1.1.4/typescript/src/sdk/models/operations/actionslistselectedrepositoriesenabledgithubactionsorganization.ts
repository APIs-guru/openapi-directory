import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJsonObject?: ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson;
}
