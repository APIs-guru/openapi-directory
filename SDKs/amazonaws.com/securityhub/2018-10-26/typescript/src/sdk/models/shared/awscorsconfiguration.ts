import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCorsConfiguration
/** 
 * Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
**/
export class AwsCorsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=AllowMethods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: string[];

  @Metadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=MaxAge" })
  maxAge?: number;
}
