import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoClickStreamHitLocationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=areacode" })
  areacode?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=metrocode" })
  metrocode?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=postalcode" })
  postalcode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=regionName" })
  regionName?: string;
}
