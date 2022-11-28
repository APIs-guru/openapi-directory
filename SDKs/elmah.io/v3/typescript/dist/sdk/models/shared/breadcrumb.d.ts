import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A breadcrumb represent a step preceding a log message.
**/
export declare class Breadcrumb extends SpeakeasyBase {
    action?: string;
    dateTime?: Date;
    message?: string;
    severity?: string;
}
