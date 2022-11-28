import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Amazon Web Services credentials for API authentication.
**/
export declare class Credentials extends SpeakeasyBase {
    accessKeyId: string;
    expiration: Date;
    secretAccessKey: string;
    sessionToken: string;
}
