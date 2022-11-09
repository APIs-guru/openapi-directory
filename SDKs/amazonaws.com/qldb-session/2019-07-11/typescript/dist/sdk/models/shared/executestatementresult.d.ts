import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IoUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the details of the executed statement.
**/
export declare class ExecuteStatementResult extends SpeakeasyBase {
    consumedIOs?: IoUsage;
    firstPage?: Page;
    timingInformation?: TimingInformation;
}
