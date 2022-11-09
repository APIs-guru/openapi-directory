import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbsoluteDateRange } from "./absolutedaterange";
import { RealtimeTimeRange } from "./realtimetimerange";
import { RelativeDateRange } from "./relativedaterange";

export enum FilterSetBreakdownDimensionsEnum {
    BreakdownDimensionUnspecified = "BREAKDOWN_DIMENSION_UNSPECIFIED"
,    PublisherIdentifier = "PUBLISHER_IDENTIFIER"
}

export enum FilterSetEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED"
,    Web = "WEB"
,    App = "APP"
}

export enum FilterSetFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    NativeDisplay = "NATIVE_DISPLAY"
,    NativeVideo = "NATIVE_VIDEO"
,    NonNativeDisplay = "NON_NATIVE_DISPLAY"
,    NonNativeVideo = "NON_NATIVE_VIDEO"
}

export enum FilterSetFormatsEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    NativeDisplay = "NATIVE_DISPLAY"
,    NativeVideo = "NATIVE_VIDEO"
,    NonNativeDisplay = "NON_NATIVE_DISPLAY"
,    NonNativeVideo = "NON_NATIVE_VIDEO"
}

export enum FilterSetPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Desktop = "DESKTOP"
,    Tablet = "TABLET"
,    Mobile = "MOBILE"
}

export enum FilterSetTimeSeriesGranularityEnum {
    TimeSeriesGranularityUnspecified = "TIME_SERIES_GRANULARITY_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
}


// FilterSet
/** 
 * A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".
**/
export class FilterSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=absoluteDateRange" })
  absoluteDateRange?: AbsoluteDateRange;

  @Metadata({ data: "json, name=breakdownDimensions" })
  breakdownDimensions?: FilterSetBreakdownDimensionsEnum[];

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=dealId" })
  dealId?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: FilterSetEnvironmentEnum;

  @Metadata({ data: "json, name=format" })
  format?: FilterSetFormatEnum;

  @Metadata({ data: "json, name=formats" })
  formats?: FilterSetFormatsEnum[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platforms" })
  platforms?: FilterSetPlatformsEnum[];

  @Metadata({ data: "json, name=publisherIdentifiers" })
  publisherIdentifiers?: string[];

  @Metadata({ data: "json, name=realtimeTimeRange" })
  realtimeTimeRange?: RealtimeTimeRange;

  @Metadata({ data: "json, name=relativeDateRange" })
  relativeDateRange?: RelativeDateRange;

  @Metadata({ data: "json, name=sellerNetworkIds" })
  sellerNetworkIds?: number[];

  @Metadata({ data: "json, name=timeSeriesGranularity" })
  timeSeriesGranularity?: FilterSetTimeSeriesGranularityEnum;
}
