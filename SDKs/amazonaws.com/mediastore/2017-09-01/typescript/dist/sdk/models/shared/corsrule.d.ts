import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MethodNameEnum } from "./methodnameenum";
/**
 * A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
**/
export declare class CorsRule extends SpeakeasyBase {
    allowedHeaders: string[];
    allowedMethods?: MethodNameEnum[];
    allowedOrigins: string[];
    exposeHeaders?: string[];
    maxAgeSeconds?: number;
}
