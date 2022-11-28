import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MethodSelector
/** 
 * An allowed method or permission of a service specified in ApiOperation.
**/
export class MethodSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;
}
