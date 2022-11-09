import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IngressSource } from "./ingresssource";

export enum IngressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED"
,    AnyIdentity = "ANY_IDENTITY"
,    AnyUserAccount = "ANY_USER_ACCOUNT"
,    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}


// IngressFrom
/** 
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
**/
export class IngressFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=identities" })
  identities?: string[];

  @Metadata({ data: "json, name=identityType" })
  identityType?: IngressFromIdentityTypeEnum;

  @Metadata({ data: "json, name=sources", elemType: shared.IngressSource })
  sources?: IngressSource[];
}
