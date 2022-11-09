import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[admin]" })
  qAdmin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[allowed_ips]" })
  qAllowedIps?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[email]" })
  qEmail?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[notes]" })
  qNotes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[password_validity_days]" })
  qPasswordValidityDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[ssl_required]" })
  qSslRequired?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q[username]" })
  qUsername?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersQueryParams;
}


export class GetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserEntity })
  userEntities?: shared.UserEntity[];
}
