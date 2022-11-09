import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MethodNameEnum } from "./methodnameenum";


// CorsRule
/** 
 * A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
**/
export class CorsRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedHeaders" })
  allowedHeaders: string[];

  @Metadata({ data: "json, name=AllowedMethods" })
  allowedMethods?: MethodNameEnum[];

  @Metadata({ data: "json, name=AllowedOrigins" })
  allowedOrigins: string[];

  @Metadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=MaxAgeSeconds" })
  maxAgeSeconds?: number;
}
