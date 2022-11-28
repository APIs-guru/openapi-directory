import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAppConfigIncludeEnum {
    Classification = "classification",
    Playback = "playback",
    Sitemap = "sitemap",
    Navigation = "navigation",
    Subscription = "subscription",
    General = "general",
    Display = "display",
    I18n = "i18n",
    Linear = "linear"
}


export class GetAppConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: GetAppConfigIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=system" })
  system?: string;
}


export class GetAppConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAppConfigQueryParams;
}


export class GetAppConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appConfig?: shared.AppConfig;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
