import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCardDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetCardDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetCardDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetCardDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCardDetailsPathParams;

  @Metadata()
  queryParams: GetCardDetailsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvGetCardDetailsRequest;

  @Metadata()
  security: GetCardDetailsSecurity;
}


export class GetCardDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvCardDetails?: shared.ItvCardDetails;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
