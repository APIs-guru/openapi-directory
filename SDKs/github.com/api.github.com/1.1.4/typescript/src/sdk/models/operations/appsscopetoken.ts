import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsScopeTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsScopeTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: shared.AppPermissions;

  @Metadata({ data: "json, name=repositories" })
  repositories?: string[];

  @Metadata({ data: "json, name=repository_ids" })
  repositoryIds?: number[];

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=target_id" })
  targetId?: number;
}


export class AppsScopeTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsScopeTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsScopeTokenRequestBody;
}


export class AppsScopeTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
