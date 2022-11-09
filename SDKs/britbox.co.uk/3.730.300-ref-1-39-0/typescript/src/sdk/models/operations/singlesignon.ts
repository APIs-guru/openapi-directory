import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SingleSignOnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class SingleSignOnRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SingleSignOnQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SingleSignOnRequest;
}


export class SingleSignOnResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
