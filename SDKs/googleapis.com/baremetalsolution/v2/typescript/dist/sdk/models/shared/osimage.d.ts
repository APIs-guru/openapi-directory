import { SpeakeasyBase } from "../../../internal/utils";
import { ServerNetworkTemplate } from "./servernetworktemplate";
/**
 * Operation System image.
**/
export declare class OsImage extends SpeakeasyBase {
    applicableInstanceTypes?: string[];
    code?: string;
    description?: string;
    name?: string;
    supportedNetworkTemplates?: ServerNetworkTemplate[];
}
