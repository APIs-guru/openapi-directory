import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SimilarSalePriceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daysBack" })
  daysBack: number;

  @SpeakeasyMetadata({ data: "json, name=mileCount" })
  mileCount: number;

  @SpeakeasyMetadata({ data: "json, name=milesAvg" })
  milesAvg: number;

  @SpeakeasyMetadata({ data: "json, name=milesStdDev" })
  milesStdDev: number;

  @SpeakeasyMetadata({ data: "json, name=newCount" })
  newCount: number;

  @SpeakeasyMetadata({ data: "json, name=newSaleAvg" })
  newSaleAvg: number;

  @SpeakeasyMetadata({ data: "json, name=newSaleStdDev" })
  newSaleStdDev: number;

  @SpeakeasyMetadata({ data: "json, name=usedCount" })
  usedCount: number;

  @SpeakeasyMetadata({ data: "json, name=usedSaleAvg" })
  usedSaleAvg: number;

  @SpeakeasyMetadata({ data: "json, name=usedSaleStdDev" })
  usedSaleStdDev: number;
}
