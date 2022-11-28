import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteDateRange } from "./absolutedaterange";
import { RealtimeTimeRange } from "./realtimetimerange";
import { RelativeDateRange } from "./relativedaterange";
export declare enum FilterSetBreakdownDimensionsEnum {
    BreakdownDimensionUnspecified = "BREAKDOWN_DIMENSION_UNSPECIFIED",
    PublisherIdentifier = "PUBLISHER_IDENTIFIER"
}
export declare enum FilterSetEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Web = "WEB",
    App = "APP"
}
export declare enum FilterSetFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    NativeDisplay = "NATIVE_DISPLAY",
    NativeVideo = "NATIVE_VIDEO",
    NonNativeDisplay = "NON_NATIVE_DISPLAY",
    NonNativeVideo = "NON_NATIVE_VIDEO"
}
export declare enum FilterSetFormatsEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    NativeDisplay = "NATIVE_DISPLAY",
    NativeVideo = "NATIVE_VIDEO",
    NonNativeDisplay = "NON_NATIVE_DISPLAY",
    NonNativeVideo = "NON_NATIVE_VIDEO"
}
export declare enum FilterSetPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Desktop = "DESKTOP",
    Tablet = "TABLET",
    Mobile = "MOBILE"
}
export declare enum FilterSetTimeSeriesGranularityEnum {
    TimeSeriesGranularityUnspecified = "TIME_SERIES_GRANULARITY_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".
**/
export declare class FilterSet extends SpeakeasyBase {
    absoluteDateRange?: AbsoluteDateRange;
    breakdownDimensions?: FilterSetBreakdownDimensionsEnum[];
    creativeId?: string;
    dealId?: string;
    environment?: FilterSetEnvironmentEnum;
    format?: FilterSetFormatEnum;
    formats?: FilterSetFormatsEnum[];
    name?: string;
    platforms?: FilterSetPlatformsEnum[];
    publisherIdentifiers?: string[];
    realtimeTimeRange?: RealtimeTimeRange;
    relativeDateRange?: RelativeDateRange;
    sellerNetworkIds?: number[];
    timeSeriesGranularity?: FilterSetTimeSeriesGranularityEnum;
}
