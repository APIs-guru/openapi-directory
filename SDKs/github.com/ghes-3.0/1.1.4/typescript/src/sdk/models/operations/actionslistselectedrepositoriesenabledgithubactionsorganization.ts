import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;

  @Metadata()
  queryParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJsonObject?: ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson;
}
