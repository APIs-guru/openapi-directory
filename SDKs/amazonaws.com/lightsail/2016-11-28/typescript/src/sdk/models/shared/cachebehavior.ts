import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BehaviorEnumEnum } from "./behaviorenumenum";


// CacheBehavior
/** 
 * Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
**/
export class CacheBehavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=behavior" })
  behavior?: BehaviorEnumEnum;
}
