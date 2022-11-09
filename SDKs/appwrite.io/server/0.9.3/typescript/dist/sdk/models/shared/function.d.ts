import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Function
**/
export declare class Function extends SpeakeasyBase {
    dollarId: string;
    dollarPermissions: Map<string, any>;
    dateCreated: number;
    dateUpdated: number;
    events: string[];
    name: string;
    runtime: string;
    schedule: string;
    scheduleNext: number;
    schedulePrevious: number;
    status: string;
    tag: string;
    timeout: number;
    vars: string;
}
