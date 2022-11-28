import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountTokenByCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetAccountTokenByCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountTokenByCodeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AccountTokenByCodeRequest;
}


export class GetAccountTokenByCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
