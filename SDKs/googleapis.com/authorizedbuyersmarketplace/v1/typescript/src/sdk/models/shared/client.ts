import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientRoleEnum {
    ClientRoleUnspecified = "CLIENT_ROLE_UNSPECIFIED",
    ClientDealViewer = "CLIENT_DEAL_VIEWER",
    ClientDealNegotiator = "CLIENT_DEAL_NEGOTIATOR",
    ClientDealApprover = "CLIENT_DEAL_APPROVER"
}

export enum ClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// Client
/** 
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
export class Client extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerClientId" })
  partnerClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: ClientRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=sellerVisible" })
  sellerVisible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClientStateEnum;
}


// ClientInput
/** 
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
export class ClientInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerClientId" })
  partnerClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: ClientRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=sellerVisible" })
  sellerVisible?: boolean;
}
