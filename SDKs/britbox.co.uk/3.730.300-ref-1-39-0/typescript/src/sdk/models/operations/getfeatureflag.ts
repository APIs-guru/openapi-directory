import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeatureFlagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=feature" })
  feature: string;
}


export class GetFeatureFlagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetFeatureFlagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeatureFlagPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFeatureFlagQueryParams;
}


export class GetFeatureFlagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvFeatureFlag?: shared.ItvFeatureFlag;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
