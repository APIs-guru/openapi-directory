import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an app's SSL configuration.
**/
export declare class SslConfiguration extends SpeakeasyBase {
    certificate: string;
    chain?: string;
    privateKey: string;
}
