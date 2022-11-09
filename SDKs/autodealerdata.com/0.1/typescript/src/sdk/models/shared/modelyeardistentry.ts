import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModelYearDistEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandName" })
  brandName: string;

  @Metadata({ data: "json, name=modelName" })
  modelName: string;

  @Metadata({ data: "json, name=percentOfMarket" })
  percentOfMarket: number;

  @Metadata({ data: "json, name=year" })
  year: number;
}
