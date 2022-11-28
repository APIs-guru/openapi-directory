import { SpeakeasyBase } from "../../../internal/utils";
import { TimeWindow } from "./timewindow";
export declare class GetSampledRequestsRequest extends SpeakeasyBase {
    maxItems: number;
    ruleId: string;
    timeWindow: TimeWindow;
    webAclId: string;
}
