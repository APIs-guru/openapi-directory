import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeCardDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ChangeCardDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ChangeCardDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ChangeCardDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeCardDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeCardDetailsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvChangeCardDetailsRequest;

  @SpeakeasyMetadata()
  security: ChangeCardDetailsSecurity;
}


export class ChangeCardDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
