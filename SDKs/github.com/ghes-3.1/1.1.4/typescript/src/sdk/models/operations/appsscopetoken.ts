import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsScopeTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsScopeTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: shared.AppPermissions;

  @SpeakeasyMetadata({ data: "json, name=repositories" })
  repositories?: string[];

  @SpeakeasyMetadata({ data: "json, name=repository_ids" })
  repositoryIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=target_id" })
  targetId?: number;
}


export class AppsScopeTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsScopeTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsScopeTokenRequestBody;
}


export class AppsScopeTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
