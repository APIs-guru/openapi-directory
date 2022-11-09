import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum {
    DimensionScopeUnspecified = "DIMENSION_SCOPE_UNSPECIFIED"
,    Event = "EVENT"
,    User = "USER"
}


// GoogleAnalyticsAdminV1alphaCustomDimension
/** 
 * A definition for a CustomDimension.
**/
export class GoogleAnalyticsAdminV1alphaCustomDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disallowAdsPersonalization" })
  disallowAdsPersonalization?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}
