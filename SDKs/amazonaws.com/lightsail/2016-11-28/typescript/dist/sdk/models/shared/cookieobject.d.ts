import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardValuesEnum } from "./forwardvaluesenum";
/**
 * <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>
**/
export declare class CookieObject extends SpeakeasyBase {
    cookiesAllowList?: string[];
    option?: ForwardValuesEnum;
}
