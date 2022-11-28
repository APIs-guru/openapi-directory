import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppConfigIncludeEnum {
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
export declare class GetAppConfigQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    include?: GetAppConfigIncludeEnum[];
    lang?: string;
    segments?: string[];
    sub?: string;
    system?: string;
}
export declare class GetAppConfigRequest extends SpeakeasyBase {
    queryParams: GetAppConfigQueryParams;
}
export declare class GetAppConfigResponse extends SpeakeasyBase {
    appConfig?: shared.AppConfig;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
