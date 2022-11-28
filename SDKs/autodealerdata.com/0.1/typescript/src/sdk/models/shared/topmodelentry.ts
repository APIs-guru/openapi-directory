import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TopModelEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandMarketShare" })
  brandMarketShare: number;

  @SpeakeasyMetadata({ data: "json, name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=percentOfBrandSales" })
  percentOfBrandSales: number;

  @SpeakeasyMetadata({ data: "json, name=percentOfTopSales" })
  percentOfTopSales: number;
}
