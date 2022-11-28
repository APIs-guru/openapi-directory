import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a token.
**/
export declare class TokenData extends SpeakeasyBase {
    expirationTime?: string;
    licenseArn?: string;
    roleArns?: string[];
    status?: string;
    tokenId?: string;
    tokenProperties?: string[];
    tokenType?: string;
}
