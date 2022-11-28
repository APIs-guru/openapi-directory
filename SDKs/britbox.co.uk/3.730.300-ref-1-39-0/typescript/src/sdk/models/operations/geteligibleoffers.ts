import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEligibleOffersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetEligibleOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEligibleOffersQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EeOffersRequest;
}


export class GetEligibleOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eeOffersResponse?: shared.EeOffersResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
