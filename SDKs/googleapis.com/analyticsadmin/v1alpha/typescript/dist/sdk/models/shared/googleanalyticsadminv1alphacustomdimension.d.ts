import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum {
    DimensionScopeUnspecified = "DIMENSION_SCOPE_UNSPECIFIED",
    Event = "EVENT",
    User = "USER"
}
/**
 * A definition for a CustomDimension.
**/
export declare class GoogleAnalyticsAdminV1alphaCustomDimension extends SpeakeasyBase {
    description?: string;
    disallowAdsPersonalization?: boolean;
    displayName?: string;
    name?: string;
    parameterName?: string;
    scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}
/**
 * A definition for a CustomDimension.
**/
export declare class GoogleAnalyticsAdminV1alphaCustomDimensionInput extends SpeakeasyBase {
    description?: string;
    disallowAdsPersonalization?: boolean;
    displayName?: string;
    parameterName?: string;
    scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}
