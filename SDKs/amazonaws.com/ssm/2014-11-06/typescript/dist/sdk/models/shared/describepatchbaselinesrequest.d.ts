import { SpeakeasyBase } from "../../../internal/utils";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";
export declare class DescribePatchBaselinesRequest extends SpeakeasyBase {
    filters?: PatchOrchestratorFilter[];
    maxResults?: number;
    nextToken?: string;
}
