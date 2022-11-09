import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoClickStreamHitBrowserInfo } from "./apicoredtoclickstreamhitbrowserinfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitConversionInfo } from "./apicoredtoclickstreamhitconversioninfo";
import { ApiCoreDtoClickStreamHitDatapointInfo } from "./apicoredtoclickstreamhitdatapointinfo";
import { ApiCoreDtoClickStreamHitLocationInfo } from "./apicoredtoclickstreamhitlocationinfo";
import { ApiCoreDtoClickStreamHitOsInfo } from "./apicoredtoclickstreamhitosinfo";
import { ApiCoreDtoClickStreamHitSource } from "./apicoredtoclickstreamhitsource";


export class ApiCoreDtoClickStreamHit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTime" })
  accessTime?: string;

  @Metadata({ data: "json, name=browser" })
  browser?: ApiCoreDtoClickStreamHitBrowserInfo;

  @Metadata({ data: "json, name=clientLanguage" })
  clientLanguage?: string;

  @Metadata({ data: "json, name=conversion1" })
  conversion1?: ApiCoreDtoClickStreamHitConversionInfo;

  @Metadata({ data: "json, name=conversion2" })
  conversion2?: ApiCoreDtoClickStreamHitConversionInfo;

  @Metadata({ data: "json, name=conversion3" })
  conversion3?: ApiCoreDtoClickStreamHitConversionInfo;

  @Metadata({ data: "json, name=conversion4" })
  conversion4?: ApiCoreDtoClickStreamHitConversionInfo;

  @Metadata({ data: "json, name=conversion5" })
  conversion5?: ApiCoreDtoClickStreamHitConversionInfo;

  @Metadata({ data: "json, name=conversions", elemType: shared.ApiCoreDtoClickStreamHitConversionInfo })
  conversions?: ApiCoreDtoClickStreamHitConversionInfo[];

  @Metadata({ data: "json, name=entity" })
  entity?: ApiCoreDtoClickStreamHitDatapointInfo;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=isProxy" })
  isProxy?: string;

  @Metadata({ data: "json, name=isSpider" })
  isSpider?: string;

  @Metadata({ data: "json, name=isUnique" })
  isUnique?: string;

  @Metadata({ data: "json, name=location" })
  location?: ApiCoreDtoClickStreamHitLocationInfo;

  @Metadata({ data: "json, name=org" })
  org?: string;

  @Metadata({ data: "json, name=os" })
  os?: ApiCoreDtoClickStreamHitOsInfo;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: string;

  @Metadata({ data: "json, name=realDestinationUrl" })
  realDestinationUrl?: string;

  @Metadata({ data: "json, name=referer" })
  referer?: string;

  @Metadata({ data: "json, name=source" })
  source?: ApiCoreDtoClickStreamHitSource;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
