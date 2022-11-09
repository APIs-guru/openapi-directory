import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelCacheSettingEnum } from "./modelcachesettingenum";


// MultiModelConfig
/** 
 * Specifies additional configuration for hosting multi-model endpoints.
**/
export class MultiModelConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelCacheSetting" })
  modelCacheSetting?: ModelCacheSettingEnum;
}
