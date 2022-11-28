import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListPreReceiveHooksForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum EnterpriseAdminListPreReceiveHooksForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}


export class EnterpriseAdminListPreReceiveHooksForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveHooksForRepoSortEnum;
}


export class EnterpriseAdminListPreReceiveHooksForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListPreReceiveHooksForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListPreReceiveHooksForRepoQueryParams;
}


export class EnterpriseAdminListPreReceiveHooksForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.RepositoryPreReceiveHook })
  repositoryPreReceiveHooks?: shared.RepositoryPreReceiveHook[];
}
