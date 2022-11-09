import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidatePinRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ValidatePinRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ValidatePinRequestQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EeValidatePinRequest;
}


export class ValidatePinRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eeValidatePinResponse?: shared.EeValidatePinResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
