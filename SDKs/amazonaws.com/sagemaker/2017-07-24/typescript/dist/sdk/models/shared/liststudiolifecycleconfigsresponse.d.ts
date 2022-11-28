import { SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigDetails } from "./studiolifecycleconfigdetails";
export declare class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    studioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}
