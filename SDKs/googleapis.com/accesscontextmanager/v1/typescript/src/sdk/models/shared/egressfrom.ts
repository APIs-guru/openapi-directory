import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EgressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED",
    AnyIdentity = "ANY_IDENTITY",
    AnyUserAccount = "ANY_USER_ACCOUNT",
    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}


// EgressFrom
/** 
 * Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
**/
export class EgressFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identities" })
  identities?: string[];

  @SpeakeasyMetadata({ data: "json, name=identityType" })
  identityType?: EgressFromIdentityTypeEnum;
}
