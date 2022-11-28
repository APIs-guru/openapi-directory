import { SpeakeasyBase } from "../../../internal/utils";
import { CookieObject } from "./cookieobject";
import { HeaderObject } from "./headerobject";
import { QueryStringObject } from "./querystringobject";
/**
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
**/
export declare class CacheSettings extends SpeakeasyBase {
    allowedHttpMethods?: string;
    cachedHttpMethods?: string;
    defaultTtl?: number;
    forwardedCookies?: CookieObject;
    forwardedHeaders?: HeaderObject;
    forwardedQueryStrings?: QueryStringObject;
    maximumTtl?: number;
    minimumTtl?: number;
}
