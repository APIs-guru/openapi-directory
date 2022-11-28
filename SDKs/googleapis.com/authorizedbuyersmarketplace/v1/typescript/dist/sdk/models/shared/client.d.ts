import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClientRoleEnum {
    ClientRoleUnspecified = "CLIENT_ROLE_UNSPECIFIED",
    ClientDealViewer = "CLIENT_DEAL_VIEWER",
    ClientDealNegotiator = "CLIENT_DEAL_NEGOTIATOR",
    ClientDealApprover = "CLIENT_DEAL_APPROVER"
}
export declare enum ClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
export declare class Client extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    partnerClientId?: string;
    role?: ClientRoleEnum;
    sellerVisible?: boolean;
    state?: ClientStateEnum;
}
/**
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
export declare class ClientInput extends SpeakeasyBase {
    displayName?: string;
    partnerClientId?: string;
    role?: ClientRoleEnum;
    sellerVisible?: boolean;
}
