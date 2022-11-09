import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum {
    PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED"
,    PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY"
,    PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY"
,    PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP"
}


// GoogleAnalyticsAdminV1alphaPropertySummary
/** 
 * A virtual resource representing metadata for a GA4 property.
**/
export class GoogleAnalyticsAdminV1alphaPropertySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=propertyType" })
  propertyType?: GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum;
}
