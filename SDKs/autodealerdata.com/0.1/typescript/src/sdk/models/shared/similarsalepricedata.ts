import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SimilarSalePriceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=daysBack" })
  daysBack: number;

  @Metadata({ data: "json, name=mileCount" })
  mileCount: number;

  @Metadata({ data: "json, name=milesAvg" })
  milesAvg: number;

  @Metadata({ data: "json, name=milesStdDev" })
  milesStdDev: number;

  @Metadata({ data: "json, name=newCount" })
  newCount: number;

  @Metadata({ data: "json, name=newSaleAvg" })
  newSaleAvg: number;

  @Metadata({ data: "json, name=newSaleStdDev" })
  newSaleStdDev: number;

  @Metadata({ data: "json, name=usedCount" })
  usedCount: number;

  @Metadata({ data: "json, name=usedSaleAvg" })
  usedSaleAvg: number;

  @Metadata({ data: "json, name=usedSaleStdDev" })
  usedSaleStdDev: number;
}
