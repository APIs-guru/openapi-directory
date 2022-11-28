import { SpeakeasyBase } from "../../../internal/utils";
import { KycCheck } from "./kyccheck";
/**
 * This is the base response type of the getKYC method.
**/
export declare class KycResponse extends SpeakeasyBase {
    kycChecks?: KycCheck[];
}
