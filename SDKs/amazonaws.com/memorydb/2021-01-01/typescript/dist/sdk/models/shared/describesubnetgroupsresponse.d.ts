import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SubnetGroup } from "./subnetgroup";
export declare class DescribeSubnetGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    subnetGroups?: SubnetGroup[];
}
