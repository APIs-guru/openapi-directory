import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TopModelEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandMarketShare" })
  brandMarketShare: number;

  @Metadata({ data: "json, name=brandName" })
  brandName: string;

  @Metadata({ data: "json, name=modelName" })
  modelName: string;

  @Metadata({ data: "json, name=percentOfBrandSales" })
  percentOfBrandSales: number;

  @Metadata({ data: "json, name=percentOfTopSales" })
  percentOfTopSales: number;
}
