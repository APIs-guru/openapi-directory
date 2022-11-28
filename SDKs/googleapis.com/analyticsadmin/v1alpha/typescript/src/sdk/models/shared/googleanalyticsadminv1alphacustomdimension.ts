import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum {
    DimensionScopeUnspecified = "DIMENSION_SCOPE_UNSPECIFIED",
    Event = "EVENT",
    User = "USER"
}


// GoogleAnalyticsAdminV1alphaCustomDimension
/** 
 * A definition for a CustomDimension.
**/
export class GoogleAnalyticsAdminV1alphaCustomDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disallowAdsPersonalization" })
  disallowAdsPersonalization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}


// GoogleAnalyticsAdminV1alphaCustomDimensionInput
/** 
 * A definition for a CustomDimension.
**/
export class GoogleAnalyticsAdminV1alphaCustomDimensionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disallowAdsPersonalization" })
  disallowAdsPersonalization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}
