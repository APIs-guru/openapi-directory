import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CookieObject } from "./cookieobject";
import { HeaderObject } from "./headerobject";
import { QueryStringObject } from "./querystringobject";


// CacheSettings
/** 
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
**/
export class CacheSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedHTTPMethods" })
  allowedHttpMethods?: string;

  @Metadata({ data: "json, name=cachedHTTPMethods" })
  cachedHttpMethods?: string;

  @Metadata({ data: "json, name=defaultTTL" })
  defaultTtl?: number;

  @Metadata({ data: "json, name=forwardedCookies" })
  forwardedCookies?: CookieObject;

  @Metadata({ data: "json, name=forwardedHeaders" })
  forwardedHeaders?: HeaderObject;

  @Metadata({ data: "json, name=forwardedQueryStrings" })
  forwardedQueryStrings?: QueryStringObject;

  @Metadata({ data: "json, name=maximumTTL" })
  maximumTtl?: number;

  @Metadata({ data: "json, name=minimumTTL" })
  minimumTtl?: number;
}
