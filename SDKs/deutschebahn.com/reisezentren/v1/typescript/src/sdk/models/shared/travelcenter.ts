import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TravelCenterOpeningTimes
/** 
 * Opening times of the travel center, ordered by week day
**/
export class TravelCenterOpeningTimes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fri" })
  fri?: string[];

  @SpeakeasyMetadata({ data: "json, name=mon" })
  mon?: string[];

  @SpeakeasyMetadata({ data: "json, name=sat" })
  sat?: string[];

  @SpeakeasyMetadata({ data: "json, name=sun" })
  sun?: string[];

  @SpeakeasyMetadata({ data: "json, name=thu" })
  thu?: string[];

  @SpeakeasyMetadata({ data: "json, name=tue" })
  tue?: string[];

  @SpeakeasyMetadata({ data: "json, name=wed" })
  wed?: string[];
}

export enum TravelCenterTypeEnum {
    Reisezentrum = "Reisezentrum",
    MobilityCenter = "Mobility Center"
}


export class TravelCenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openingTimes" })
  openingTimes?: TravelCenterOpeningTimes;

  @SpeakeasyMetadata({ data: "json, name=postCode" })
  postCode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TravelCenterTypeEnum;
}
