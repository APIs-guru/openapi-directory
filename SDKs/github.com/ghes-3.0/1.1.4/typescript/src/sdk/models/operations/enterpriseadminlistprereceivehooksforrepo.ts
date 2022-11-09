import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListPreReceiveHooksForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum EnterpriseAdminListPreReceiveHooksForRepoSortEnum {
    Created = "created"
,    Updated = "updated"
,    Name = "name"
}


export class EnterpriseAdminListPreReceiveHooksForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveHooksForRepoSortEnum;
}


export class EnterpriseAdminListPreReceiveHooksForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListPreReceiveHooksForRepoPathParams;

  @Metadata()
  queryParams: EnterpriseAdminListPreReceiveHooksForRepoQueryParams;
}


export class EnterpriseAdminListPreReceiveHooksForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.RepositoryPreReceiveHook })
  repositoryPreReceiveHooks?: shared.RepositoryPreReceiveHook[];
}
