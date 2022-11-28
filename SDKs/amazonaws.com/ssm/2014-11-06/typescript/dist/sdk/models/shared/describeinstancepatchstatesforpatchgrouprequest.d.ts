import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePatchStateFilter } from "./instancepatchstatefilter";
export declare class DescribeInstancePatchStatesForPatchGroupRequest extends SpeakeasyBase {
    filters?: InstancePatchStateFilter[];
    maxResults?: number;
    nextToken?: string;
    patchGroup: string;
}
