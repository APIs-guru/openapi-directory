import { SpeakeasyBase } from "../../../internal/utils";
import { Addon } from "./addon";
import { Servicepack } from "./servicepack";
/**
 * A detailed representation of an account.
**/
export declare class AccountDetail extends SpeakeasyBase {
    addons?: Addon[];
    id?: number;
    identifier?: string;
    servicepack?: Servicepack;
}
