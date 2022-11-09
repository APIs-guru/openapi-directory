import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DealershipDataPaginated } from "./dealershipdatapaginated";


export class DealershipDataPaginatedResp extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandName" })
  brandName?: string;

  @Metadata({ data: "json, name=cacheTimeLimit" })
  cacheTimeLimit?: number;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=data" })
  data: DealershipDataPaginated;

  @Metadata({ data: "json, name=modelName" })
  modelName?: string;

  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=regionName" })
  regionName?: string;
}
