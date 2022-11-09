import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=blocked" })
  blocked?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.UsersSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersQueryParams;

  @Metadata()
  security: GetUsersSecurity;
}


export class GetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  users?: any[];
}
