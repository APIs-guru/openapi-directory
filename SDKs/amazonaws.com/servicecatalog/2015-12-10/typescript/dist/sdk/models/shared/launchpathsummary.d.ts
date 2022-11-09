import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConstraintSummary } from "./constraintsummary";
import { Tag } from "./tag";
/**
 * Summary information about a product path for a user.
**/
export declare class LaunchPathSummary extends SpeakeasyBase {
    constraintSummaries?: ConstraintSummary[];
    id?: string;
    name?: string;
    tags?: Tag[];
}
