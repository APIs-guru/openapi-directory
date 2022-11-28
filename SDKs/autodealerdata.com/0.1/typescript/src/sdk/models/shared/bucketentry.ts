import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BucketEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: number;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=percentOfMarket" })
  percentOfMarket: number;
}
