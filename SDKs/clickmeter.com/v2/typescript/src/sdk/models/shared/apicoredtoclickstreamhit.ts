import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoClickStreamHitBrowserInfo } from "./apicoredtoclickstreamhitbrowserinfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitDatapointInfo } from "./apicoredtoclickstreamhitdatapointinfo";
import { ApiCoreDtoClickStreamHitLocationInfo } from "./apicoredtoclickstreamhitlocationinfo";
import { ApiCoreDtoClickStreamHitOsInfo } from "./apicoredtoclickstreamhitosinfo";
import { ApiCoreDtoClickStreamHitSource } from "./apicoredtoclickstreamhitsource";



export class ApiCoreDtoClickStreamHit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTime" })
  accessTime?: string;

  @SpeakeasyMetadata({ data: "json, name=browser" })
  browser?: ApiCoreDtoClickStreamHitBrowserInfo;

  @SpeakeasyMetadata({ data: "json, name=clientLanguage" })
  clientLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=conversion1" })
  conversion1?: ApiCoreDtoClickStreamHitConversionInfo;

  @SpeakeasyMetadata({ data: "json, name=conversion2" })
  conversion2?: ApiCoreDtoClickStreamHitConversionInfo;

  @SpeakeasyMetadata({ data: "json, name=conversion3" })
  conversion3?: ApiCoreDtoClickStreamHitConversionInfo;

  @SpeakeasyMetadata({ data: "json, name=conversion4" })
  conversion4?: ApiCoreDtoClickStreamHitConversionInfo;

  @SpeakeasyMetadata({ data: "json, name=conversion5" })
  conversion5?: ApiCoreDtoClickStreamHitConversionInfo;

  @SpeakeasyMetadata({ data: "json, name=conversions", elemType: ApiCoreDtoClickStreamHitConversionInfo })
  conversions?: ApiCoreDtoClickStreamHitConversionInfo[];

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: ApiCoreDtoClickStreamHitDatapointInfo;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=isProxy" })
  isProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=isSpider" })
  isSpider?: string;

  @SpeakeasyMetadata({ data: "json, name=isUnique" })
  isUnique?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ApiCoreDtoClickStreamHitLocationInfo;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: ApiCoreDtoClickStreamHitOsInfo;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: string;

  @SpeakeasyMetadata({ data: "json, name=realDestinationUrl" })
  realDestinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=referer" })
  referer?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ApiCoreDtoClickStreamHitSource;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
