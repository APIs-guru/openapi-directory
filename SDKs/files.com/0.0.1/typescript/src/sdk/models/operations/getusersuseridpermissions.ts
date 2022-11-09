import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserIdPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetUsersUserIdPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gt" })
  filterGt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" })
  filterGteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_like" })
  filterLike?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lt" })
  filterLt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" })
  filterLteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_groups" })
  includeGroups?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetUsersUserIdPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserIdPermissionsPathParams;

  @Metadata()
  queryParams: GetUsersUserIdPermissionsQueryParams;
}


export class GetUsersUserIdPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PermissionEntity })
  permissionEntities?: shared.PermissionEntity[];

  @Metadata()
  statusCode: number;
}
