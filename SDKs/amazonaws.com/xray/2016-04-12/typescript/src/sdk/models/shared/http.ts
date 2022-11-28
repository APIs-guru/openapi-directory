import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Http
/** 
 * Information about an HTTP request.
**/
export class Http extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientIp" })
  clientIp?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpStatus" })
  httpStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=HttpURL" })
  httpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAgent" })
  userAgent?: string;
}
