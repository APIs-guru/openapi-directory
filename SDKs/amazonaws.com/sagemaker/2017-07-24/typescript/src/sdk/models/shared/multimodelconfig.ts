import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelCacheSettingEnum } from "./modelcachesettingenum";



// MultiModelConfig
/** 
 * Specifies additional configuration for hosting multi-model endpoints.
**/
export class MultiModelConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelCacheSetting" })
  modelCacheSetting?: ModelCacheSettingEnum;
}
