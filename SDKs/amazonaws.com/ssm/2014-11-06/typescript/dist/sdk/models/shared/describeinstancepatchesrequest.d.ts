import { SpeakeasyBase } from "../../../internal/utils";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";
export declare class DescribeInstancePatchesRequest extends SpeakeasyBase {
    filters?: PatchOrchestratorFilter[];
    instanceId: string;
    maxResults?: number;
    nextToken?: string;
}
