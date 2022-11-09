import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryStringObject
/** 
 * <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>
**/
export class QueryStringObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option?: boolean;

  @Metadata({ data: "json, name=queryStringsAllowList" })
  queryStringsAllowList?: string[];
}
