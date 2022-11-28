import { SpeakeasyBase } from "../../../internal/utils";
import { IngressSource } from "./ingresssource";
export declare enum IngressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED",
    AnyIdentity = "ANY_IDENTITY",
    AnyUserAccount = "ANY_USER_ACCOUNT",
    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}
/**
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
**/
export declare class IngressFrom extends SpeakeasyBase {
    identities?: string[];
    identityType?: IngressFromIdentityTypeEnum;
    sources?: IngressSource[];
}
