import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BehaviorEnumEnum } from "./behaviorenumenum";



// CacheBehavior
/** 
 * Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
**/
export class CacheBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behavior" })
  behavior?: BehaviorEnumEnum;
}
