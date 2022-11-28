import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceRecurringApiModelDayOfWeekEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
export declare enum InvoiceRecurringApiModelRecurrancePatternEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Yearly = "Yearly"
}
export declare enum InvoiceRecurringApiModelStatusEnum {
    Pending = "Pending",
    Active = "Active",
    Cancelled = "Cancelled",
    Finished = "Finished"
}
/**
 * Definition of invoice recurring profile
**/
export declare class InvoiceRecurringApiModel extends SpeakeasyBase {
    dayOfMonth?: number;
    dayOfWeek?: InvoiceRecurringApiModelDayOfWeekEnum;
    dueDateInDays?: number;
    endOfRecurrance?: Date;
    month?: number;
    recurrancePattern?: InvoiceRecurringApiModelRecurrancePatternEnum;
    recurranceValue?: number;
    startOfRecurrance?: Date;
    status?: InvoiceRecurringApiModelStatusEnum;
    title?: string;
}
