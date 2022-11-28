import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gt" })
  filterGt?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" })
  filterGteq?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_like" })
  filterLike?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lt" })
  filterLt?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" })
  filterLteq?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[admin]" })
  qAdmin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[allowed_ips]" })
  qAllowedIps?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[email]" })
  qEmail?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[notes]" })
  qNotes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[password_validity_days]" })
  qPasswordValidityDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[ssl_required]" })
  qSslRequired?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q[username]" })
  qUsername?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsersQueryParams;
}


export class GetUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserEntity })
  userEntities?: shared.UserEntity[];
}
