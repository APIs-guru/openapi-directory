import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessAccount } from "./businessaccount";
import { IndividualAccount } from "./individualaccount";
/**
 * The type that defines the fields for the getUser method.
**/
export declare class UserResponse extends SpeakeasyBase {
    accountType?: string;
    businessAccount?: BusinessAccount;
    individualAccount?: IndividualAccount;
    registrationMarketplaceId?: string;
    status?: string;
    userId?: string;
    username?: string;
}
