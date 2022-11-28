import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to provide details about any KYC check that is applicable to the managed payments seller.
**/
export declare class KycCheck extends SpeakeasyBase {
    alert?: string;
    dataRequired?: string;
    detailMessage?: string;
    dueDate?: string;
    remedyUrl?: string;
}
