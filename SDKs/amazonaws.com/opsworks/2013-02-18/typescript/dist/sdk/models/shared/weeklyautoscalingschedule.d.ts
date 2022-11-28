import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>
**/
export declare class WeeklyAutoScalingSchedule extends SpeakeasyBase {
    friday?: Map<string, string>;
    monday?: Map<string, string>;
    saturday?: Map<string, string>;
    sunday?: Map<string, string>;
    thursday?: Map<string, string>;
    tuesday?: Map<string, string>;
    wednesday?: Map<string, string>;
}
