import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Contains the details of an IoT SiteWise configuration error.
**/
export declare class ConfigurationErrorDetails extends SpeakeasyBase {
    code: ErrorCodeEnum;
    message: string;
}
