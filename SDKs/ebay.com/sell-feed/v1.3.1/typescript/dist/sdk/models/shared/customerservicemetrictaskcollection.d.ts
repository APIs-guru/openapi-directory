import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMetricsTask } from "./servicemetricstask";
export declare class CustomerServiceMetricTaskCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    tasks?: ServiceMetricsTask[];
    total?: number;
}
