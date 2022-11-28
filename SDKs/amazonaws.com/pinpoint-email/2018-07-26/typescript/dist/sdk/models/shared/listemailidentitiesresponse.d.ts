import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityInfo } from "./identityinfo";
/**
 * A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.
**/
export declare class ListEmailIdentitiesResponse extends SpeakeasyBase {
    emailIdentities?: IdentityInfo[];
    nextToken?: string;
}
