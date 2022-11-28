import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
**/
export declare class ComplianceDetails extends SpeakeasyBase {
    complianceStatus?: boolean;
    keysWithNoncompliantValues?: string[];
    noncompliantKeys?: string[];
}
