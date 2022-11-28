import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePinRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CreatePinRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreatePinRequestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EeCreatePinRequest;
}


export class CreatePinRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eeCreatePinResponse?: shared.EeCreatePinResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
