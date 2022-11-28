import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=insight" })
  insight: string;
}

export enum BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    CustomDateRange = "CUSTOM_DATE_RANGE"
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregation" })
  aggregation?: BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customGrouping.fieldFilter" })
  customGroupingFieldFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customGrouping.groupFields" })
  customGroupingGroupFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldFilter" })
  fieldFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams;

  @SpeakeasyMetadata()
  queryParams: BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams;

  @SpeakeasyMetadata()
  security: BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity;
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse?: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
