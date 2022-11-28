import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountKey } from "./serviceaccountkey";
/**
 * A service account identity, including the name and credentials that can be used to authenticate as the service account.
**/
export declare class ServiceAccount extends SpeakeasyBase {
    key?: ServiceAccountKey;
    name?: string;
}
