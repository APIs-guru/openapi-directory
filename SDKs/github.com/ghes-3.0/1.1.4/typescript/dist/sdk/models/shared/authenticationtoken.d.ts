import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
export declare enum AuthenticationTokenRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
/**
 * Authentication Token
**/
export declare class AuthenticationToken extends SpeakeasyBase {
    expiresAt: Date;
    permissions?: Map<string, any>;
    repositories?: Repository[];
    repositorySelection?: AuthenticationTokenRepositorySelectionEnum;
    singleFile?: string;
    token: string;
}
