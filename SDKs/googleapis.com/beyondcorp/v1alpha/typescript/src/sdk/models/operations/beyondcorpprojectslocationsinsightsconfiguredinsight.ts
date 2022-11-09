import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=insight" })
  insight: string;
}

export enum BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
,    CustomDateRange = "CUSTOM_DATE_RANGE"
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregation" })
  aggregation?: BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customGrouping.fieldFilter" })
  customGroupingFieldFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customGrouping.groupFields" })
  customGroupingGroupFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fieldFilter" })
  fieldFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams;

  @Metadata()
  queryParams: BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams;

  @Metadata()
  security: BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity;
}


export class BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse?: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;

  @Metadata()
  statusCode: number;
}
