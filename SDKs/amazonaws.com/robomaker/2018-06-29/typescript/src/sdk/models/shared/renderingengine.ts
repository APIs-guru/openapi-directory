import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RenderingEngineTypeEnum } from "./renderingenginetypeenum";


// RenderingEngine
/** 
 * Information about a rendering engine.
**/
export class RenderingEngine extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: RenderingEngineTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
