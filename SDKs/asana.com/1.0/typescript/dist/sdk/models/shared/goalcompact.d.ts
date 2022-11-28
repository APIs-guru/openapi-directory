import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoalCompactOwner extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class GoalCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    owner?: GoalCompactOwner;
    resourceType?: string;
}
