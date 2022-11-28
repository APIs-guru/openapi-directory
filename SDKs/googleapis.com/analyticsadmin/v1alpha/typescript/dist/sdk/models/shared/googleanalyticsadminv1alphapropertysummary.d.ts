import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum {
    PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED",
    PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY",
    PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY",
    PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP"
}
/**
 * A virtual resource representing metadata for a GA4 property.
**/
export declare class GoogleAnalyticsAdminV1alphaPropertySummary extends SpeakeasyBase {
    displayName?: string;
    parent?: string;
    property?: string;
    propertyType?: GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum;
}
