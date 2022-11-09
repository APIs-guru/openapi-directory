import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AnalyticsDataGaGetOutputEnum {
    DataTable = "dataTable"
,    Json = "json"
}

export enum AnalyticsDataGaGetSamplingLevelEnum {
    Default = "DEFAULT"
,    Faster = "FASTER"
,    HigherPrecision = "HIGHER_PRECISION"
}


export class AnalyticsDataGaGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dimensions" })
  dimensions?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end-date" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include-empty-rows" })
  includeEmptyRows?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: AnalyticsDataGaGetOutputEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=samplingLevel" })
  samplingLevel?: AnalyticsDataGaGetSamplingLevelEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segment" })
  segment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start-date" })
  startDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start-index" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AnalyticsDataGaGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsDataGaGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsDataGaGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsDataGaGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsDataGaGetSecurityOption2;
}


export class AnalyticsDataGaGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AnalyticsDataGaGetQueryParams;

  @Metadata()
  security: AnalyticsDataGaGetSecurity;
}


export class AnalyticsDataGaGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  gaData?: shared.GaData;

  @Metadata()
  statusCode: number;
}
