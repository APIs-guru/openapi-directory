import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VehHistoryData } from "./vehhistorydata";


export class HistoryResp extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandName" })
  brandName?: string;

  @Metadata({ data: "json, name=cacheTimeLimit" })
  cacheTimeLimit?: number;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=data" })
  data: VehHistoryData;

  @Metadata({ data: "json, name=modelName" })
  modelName?: string;

  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=regionName" })
  regionName?: string;
}
