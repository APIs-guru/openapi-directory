import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelYearDistEntry } from "./modelyeardistentry";


export class ModelYearDistResp extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandName" })
  brandName?: string;

  @Metadata({ data: "json, name=cacheTimeLimit" })
  cacheTimeLimit?: number;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=data", elemType: shared.ModelYearDistEntry })
  data: ModelYearDistEntry[];

  @Metadata({ data: "json, name=modelName" })
  modelName?: string;

  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=regionName" })
  regionName?: string;
}
