import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MethodNameEnum } from "./methodnameenum";



// CorsRule
/** 
 * A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
**/
export class CorsRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedHeaders" })
  allowedHeaders: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowedMethods" })
  allowedMethods?: MethodNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=AllowedOrigins" })
  allowedOrigins: string[];

  @SpeakeasyMetadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxAgeSeconds" })
  maxAgeSeconds?: number;
}
