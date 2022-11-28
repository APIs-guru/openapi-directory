import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClientEntityTypeEnum {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Brand = "BRAND",
    Agency = "AGENCY",
    EntityTypeUnclassified = "ENTITY_TYPE_UNCLASSIFIED"
}
export declare enum ClientRoleEnum {
    ClientRoleUnspecified = "CLIENT_ROLE_UNSPECIFIED",
    ClientDealViewer = "CLIENT_DEAL_VIEWER",
    ClientDealNegotiator = "CLIENT_DEAL_NEGOTIATOR",
    ClientDealApprover = "CLIENT_DEAL_APPROVER"
}
export declare enum ClientStatusEnum {
    ClientStatusUnspecified = "CLIENT_STATUS_UNSPECIFIED",
    Disabled = "DISABLED",
    Active = "ACTIVE"
}
/**
 * A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
**/
export declare class Client extends SpeakeasyBase {
    clientAccountId?: string;
    clientName?: string;
    entityId?: string;
    entityName?: string;
    entityType?: ClientEntityTypeEnum;
    partnerClientId?: string;
    role?: ClientRoleEnum;
    status?: ClientStatusEnum;
    visibleToSeller?: boolean;
}
