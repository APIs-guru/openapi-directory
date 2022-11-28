import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OpportunitiesAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class OpportunitiesAddHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class OpportunitiesAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class OpportunitiesAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OpportunitiesAddQueryParams;

  @SpeakeasyMetadata()
  headers: OpportunitiesAddHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OpportunityInput;

  @SpeakeasyMetadata()
  security: OpportunitiesAddSecurity;
}


export class OpportunitiesAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createOpportunityResponse?: shared.CreateOpportunityResponse;

  @SpeakeasyMetadata()
  notFoundResponse?: shared.NotFoundResponse;

  @SpeakeasyMetadata()
  paymentRequiredResponse?: shared.PaymentRequiredResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedResponse?: shared.UnauthorizedResponse;

  @SpeakeasyMetadata()
  unexpectedErrorResponse?: shared.UnexpectedErrorResponse;

  @SpeakeasyMetadata()
  unprocessableResponse?: shared.UnprocessableResponse;
}
