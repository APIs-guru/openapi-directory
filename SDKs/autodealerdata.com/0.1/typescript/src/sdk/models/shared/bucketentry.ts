import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BucketEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket: number;

  @Metadata({ data: "json, name=modelName" })
  modelName: string;

  @Metadata({ data: "json, name=percentOfMarket" })
  percentOfMarket: number;
}
