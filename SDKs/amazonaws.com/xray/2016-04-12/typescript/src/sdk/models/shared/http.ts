import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Http
/** 
 * Information about an HTTP request.
**/
export class Http extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientIp" })
  clientIp?: string;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=HttpStatus" })
  httpStatus?: number;

  @Metadata({ data: "json, name=HttpURL" })
  httpUrl?: string;

  @Metadata({ data: "json, name=UserAgent" })
  userAgent?: string;
}
