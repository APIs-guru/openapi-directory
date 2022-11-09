import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClientRoleEnum {
    ClientRoleUnspecified = "CLIENT_ROLE_UNSPECIFIED"
,    ClientDealViewer = "CLIENT_DEAL_VIEWER"
,    ClientDealNegotiator = "CLIENT_DEAL_NEGOTIATOR"
,    ClientDealApprover = "CLIENT_DEAL_APPROVER"
}

export enum ClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// Client
/** 
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
export class Client extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partnerClientId" })
  partnerClientId?: string;

  @Metadata({ data: "json, name=role" })
  role?: ClientRoleEnum;

  @Metadata({ data: "json, name=sellerVisible" })
  sellerVisible?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: ClientStateEnum;
}
