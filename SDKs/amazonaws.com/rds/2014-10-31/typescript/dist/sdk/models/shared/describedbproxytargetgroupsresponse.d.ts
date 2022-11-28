import { SpeakeasyBase } from "../../../internal/utils";
import { DbProxyTargetGroup } from "./dbproxytargetgroup";
export declare class DescribeDbProxyTargetGroupsResponse extends SpeakeasyBase {
    marker?: string;
    targetGroups?: DbProxyTargetGroup[];
}
