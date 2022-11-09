import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ForwardValuesEnum } from "./forwardvaluesenum";


// CookieObject
/** 
 * <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>
**/
export class CookieObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookiesAllowList" })
  cookiesAllowList?: string[];

  @Metadata({ data: "json, name=option" })
  option?: ForwardValuesEnum;
}
