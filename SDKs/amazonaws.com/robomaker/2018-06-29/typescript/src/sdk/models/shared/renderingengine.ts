import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RenderingEngineTypeEnum } from "./renderingenginetypeenum";



// RenderingEngine
/** 
 * Information about a rendering engine.
**/
export class RenderingEngine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: RenderingEngineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
