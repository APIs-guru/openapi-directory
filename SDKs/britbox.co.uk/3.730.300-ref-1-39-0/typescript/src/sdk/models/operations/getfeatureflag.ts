import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFeatureFlagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=feature" })
  feature: string;
}


export class GetFeatureFlagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetFeatureFlagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFeatureFlagPathParams;

  @Metadata()
  queryParams: GetFeatureFlagQueryParams;
}


export class GetFeatureFlagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvFeatureFlag?: shared.ItvFeatureFlag;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
