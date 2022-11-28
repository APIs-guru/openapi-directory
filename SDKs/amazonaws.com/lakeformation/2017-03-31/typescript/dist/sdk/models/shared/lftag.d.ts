import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
**/
export declare class LfTag extends SpeakeasyBase {
    tagKey: string;
    tagValues: string[];
}
