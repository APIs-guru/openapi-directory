import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsListForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListForUserPathParams;

  @Metadata()
  queryParams: OrgsListForUserQueryParams;
}


export class OrgsListForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrganizationSimple })
  organizationSimples?: shared.OrganizationSimple[];
}
