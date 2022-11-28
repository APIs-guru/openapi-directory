import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
**/
export declare class IdentityProviderDetails extends SpeakeasyBase {
    directoryId?: string;
    invocationRole?: string;
    url?: string;
}
