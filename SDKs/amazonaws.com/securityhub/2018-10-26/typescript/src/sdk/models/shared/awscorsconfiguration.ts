import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCorsConfiguration
/** 
 * Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
**/
export class AwsCorsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowMethods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: string[];

  @SpeakeasyMetadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxAge" })
  maxAge?: number;
}
