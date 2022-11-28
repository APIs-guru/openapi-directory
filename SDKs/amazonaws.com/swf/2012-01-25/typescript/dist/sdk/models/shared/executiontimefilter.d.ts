import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
**/
export declare class ExecutionTimeFilter extends SpeakeasyBase {
    latestDate?: Date;
    oldestDate: Date;
}
