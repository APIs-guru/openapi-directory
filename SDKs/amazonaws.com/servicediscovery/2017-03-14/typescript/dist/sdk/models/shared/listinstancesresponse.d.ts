import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceSummary } from "./instancesummary";
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: InstanceSummary[];
    nextToken?: string;
}
