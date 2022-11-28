import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriodCompact } from "./timeperiodcompact";
export declare enum TimePeriodResponsePeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}
export declare class TimePeriodResponse extends SpeakeasyBase {
    endOn?: string;
    gid?: string;
    parent?: TimePeriodCompact;
    period?: TimePeriodResponsePeriodEnum;
    resourceType?: string;
    startOn?: string;
}
