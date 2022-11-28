import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientEntityTypeEnum {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Brand = "BRAND",
    Agency = "AGENCY",
    EntityTypeUnclassified = "ENTITY_TYPE_UNCLASSIFIED"
}

export enum ClientRoleEnum {
    ClientRoleUnspecified = "CLIENT_ROLE_UNSPECIFIED",
    ClientDealViewer = "CLIENT_DEAL_VIEWER",
    ClientDealNegotiator = "CLIENT_DEAL_NEGOTIATOR",
    ClientDealApprover = "CLIENT_DEAL_APPROVER"
}

export enum ClientStatusEnum {
    ClientStatusUnspecified = "CLIENT_STATUS_UNSPECIFIED",
    Disabled = "DISABLED",
    Active = "ACTIVE"
}


// Client
/** 
 * A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
**/
export class Client extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientAccountId" })
  clientAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entityName" })
  entityName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: ClientEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=partnerClientId" })
  partnerClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: ClientRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClientStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=visibleToSeller" })
  visibleToSeller?: boolean;
}
