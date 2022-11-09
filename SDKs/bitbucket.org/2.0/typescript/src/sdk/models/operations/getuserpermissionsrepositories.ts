import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPermissionsRepositoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetUserPermissionsRepositoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUserPermissionsRepositoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUserPermissionsRepositoriesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserPermissionsRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserPermissionsRepositoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserPermissionsRepositoriesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUserPermissionsRepositoriesSecurityOption3;
}


export class GetUserPermissionsRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserPermissionsRepositoriesQueryParams;

  @Metadata()
  security: GetUserPermissionsRepositoriesSecurity;
}


export class GetUserPermissionsRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
