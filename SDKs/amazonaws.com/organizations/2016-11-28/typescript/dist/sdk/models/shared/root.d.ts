import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeSummary } from "./policytypesummary";
/**
 * Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every AWS account in the organization.
**/
export declare class Root extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
    policyTypes?: PolicyTypeSummary[];
}
