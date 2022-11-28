import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimilarSalePriceData } from "./similarsalepricedata";



export class SimilarSalePriceResp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandName" })
  brandName?: string;

  @SpeakeasyMetadata({ data: "json, name=cacheTimeLimit" })
  cacheTimeLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: SimilarSalePriceData;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName?: string;
}
