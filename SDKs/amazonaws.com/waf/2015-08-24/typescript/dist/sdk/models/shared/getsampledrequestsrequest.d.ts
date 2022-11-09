import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeWindow } from "./timewindow";
export declare class GetSampledRequestsRequest extends SpeakeasyBase {
    maxItems: number;
    ruleId: string;
    timeWindow: TimeWindow;
    webAclId: string;
}
