import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidatePinRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ValidatePinRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidatePinRequestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EeValidatePinRequest;
}


export class ValidatePinRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eeValidatePinResponse?: shared.EeValidatePinResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
