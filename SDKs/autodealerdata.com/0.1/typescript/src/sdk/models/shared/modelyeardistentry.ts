import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModelYearDistEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=percentOfMarket" })
  percentOfMarket: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
