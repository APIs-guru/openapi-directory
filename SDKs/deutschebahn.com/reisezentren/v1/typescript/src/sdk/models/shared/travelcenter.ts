import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TravelCenterOpeningTimes
/** 
 * Opening times of the travel center, ordered by week day
**/
export class TravelCenterOpeningTimes extends SpeakeasyBase {
  @Metadata({ data: "json, name=fri" })
  fri?: string[];

  @Metadata({ data: "json, name=mon" })
  mon?: string[];

  @Metadata({ data: "json, name=sat" })
  sat?: string[];

  @Metadata({ data: "json, name=sun" })
  sun?: string[];

  @Metadata({ data: "json, name=thu" })
  thu?: string[];

  @Metadata({ data: "json, name=tue" })
  tue?: string[];

  @Metadata({ data: "json, name=wed" })
  wed?: string[];
}

export enum TravelCenterTypeEnum {
    Reisezentrum = "Reisezentrum"
,    MobilityCenter = "Mobility Center"
}


export class TravelCenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=openingTimes" })
  openingTimes?: TravelCenterOpeningTimes;

  @Metadata({ data: "json, name=postCode" })
  postCode?: string;

  @Metadata({ data: "json, name=type" })
  type?: TravelCenterTypeEnum;
}
