import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Google Workspace customer.
**/
export declare class GoogleWorkspaceAccount extends SpeakeasyBase {
    customerId?: string;
    preProvisioningTokens?: string[];
}
/**
 * A Google Workspace customer.
**/
export declare class GoogleWorkspaceAccountInput extends SpeakeasyBase {
    customerId?: string;
}
