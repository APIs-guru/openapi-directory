import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies configuration details for a Git repository in your Amazon Web Services account.
**/
export declare class GitConfig extends SpeakeasyBase {
    branch?: string;
    repositoryUrl: string;
    secretArn?: string;
}
