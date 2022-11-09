import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListingRespPaginated } from "./listingresppaginated";


export class ListingResp extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandName" })
  brandName?: string;

  @Metadata({ data: "json, name=cacheTimeLimit" })
  cacheTimeLimit?: number;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=data" })
  data: ListingRespPaginated;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=modelName" })
  modelName?: string;

  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=regionName" })
  regionName?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
