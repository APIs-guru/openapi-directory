import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyDetails } from "./returnpolicydetails";
export declare class ReturnPolicy extends SpeakeasyBase {
    categoryId?: string;
    categoryTreeId?: string;
    domestic?: ReturnPolicyDetails;
    international?: ReturnPolicyDetails;
    required?: boolean;
}
