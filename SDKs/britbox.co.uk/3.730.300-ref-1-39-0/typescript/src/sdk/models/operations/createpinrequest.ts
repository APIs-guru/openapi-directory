import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePinRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CreatePinRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreatePinRequestQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EeCreatePinRequest;
}


export class CreatePinRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eeCreatePinResponse?: shared.EeCreatePinResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
