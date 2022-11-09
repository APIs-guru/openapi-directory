import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";
export declare class DescribeHomeRegionControlsRequest extends SpeakeasyBase {
    controlId?: string;
    homeRegion?: string;
    maxResults?: number;
    nextToken?: string;
    target?: Target;
}
