import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceAccessTypeEnum } from "./sourceaccesstypeenum";
/**
 * To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
**/
export declare class SourceAccessConfiguration extends SpeakeasyBase {
    type?: SourceAccessTypeEnum;
    uri?: string;
}
