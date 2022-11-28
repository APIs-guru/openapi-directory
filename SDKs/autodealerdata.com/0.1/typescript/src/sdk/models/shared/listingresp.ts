import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListingRespPaginated } from "./listingresppaginated";



export class ListingResp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandName" })
  brandName?: string;

  @SpeakeasyMetadata({ data: "json, name=cacheTimeLimit" })
  cacheTimeLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListingRespPaginated;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
