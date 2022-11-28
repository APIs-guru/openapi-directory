import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimePeriodCompactPeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}
export declare class TimePeriodCompact extends SpeakeasyBase {
    endOn?: string;
    gid?: string;
    period?: TimePeriodCompactPeriodEnum;
    resourceType?: string;
    startOn?: string;
}
