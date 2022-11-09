import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAppConfigIncludeEnum {
    Classification = "classification"
,    Playback = "playback"
,    Sitemap = "sitemap"
,    Navigation = "navigation"
,    Subscription = "subscription"
,    General = "general"
,    Display = "display"
,    I18n = "i18n"
,    Linear = "linear"
}


export class GetAppConfigQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: GetAppConfigIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=system" })
  system?: string;
}


export class GetAppConfigRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAppConfigQueryParams;
}


export class GetAppConfigResponse extends SpeakeasyBase {
  @Metadata()
  appConfig?: shared.AppConfig;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
