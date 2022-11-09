import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BehaviorEnumEnum } from "./behaviorenumenum";


// CacheBehaviorPerPath
/** 
 * <p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.</p> <p>if the cacheBehavior's behavior is set to 'cache', then</p>
**/
export class CacheBehaviorPerPath extends SpeakeasyBase {
  @Metadata({ data: "json, name=behavior" })
  behavior?: BehaviorEnumEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
