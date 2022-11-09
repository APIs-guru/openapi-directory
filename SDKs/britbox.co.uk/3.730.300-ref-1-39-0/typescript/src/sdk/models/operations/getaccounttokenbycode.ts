import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountTokenByCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetAccountTokenByCodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountTokenByCodeQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccountTokenByCodeRequest;
}


export class GetAccountTokenByCodeResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
