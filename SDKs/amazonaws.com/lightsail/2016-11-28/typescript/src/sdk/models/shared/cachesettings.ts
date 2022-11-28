import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CookieObject } from "./cookieobject";
import { HeaderObject } from "./headerobject";
import { QueryStringObject } from "./querystringobject";



// CacheSettings
/** 
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
**/
export class CacheSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedHTTPMethods" })
  allowedHttpMethods?: string;

  @SpeakeasyMetadata({ data: "json, name=cachedHTTPMethods" })
  cachedHttpMethods?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTTL" })
  defaultTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=forwardedCookies" })
  forwardedCookies?: CookieObject;

  @SpeakeasyMetadata({ data: "json, name=forwardedHeaders" })
  forwardedHeaders?: HeaderObject;

  @SpeakeasyMetadata({ data: "json, name=forwardedQueryStrings" })
  forwardedQueryStrings?: QueryStringObject;

  @SpeakeasyMetadata({ data: "json, name=maximumTTL" })
  maximumTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumTTL" })
  minimumTtl?: number;
}
