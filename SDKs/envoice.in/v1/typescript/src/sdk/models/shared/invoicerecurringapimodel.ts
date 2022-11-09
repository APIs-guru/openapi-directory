import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvoiceRecurringApiModelDayOfWeekEnum {
    Sunday = "Sunday"
,    Monday = "Monday"
,    Tuesday = "Tuesday"
,    Wednesday = "Wednesday"
,    Thursday = "Thursday"
,    Friday = "Friday"
,    Saturday = "Saturday"
}

export enum InvoiceRecurringApiModelRecurrancePatternEnum {
    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Yearly = "Yearly"
}

export enum InvoiceRecurringApiModelStatusEnum {
    Pending = "Pending"
,    Active = "Active"
,    Cancelled = "Cancelled"
,    Finished = "Finished"
}


// InvoiceRecurringApiModel
/** 
 * Definition of invoice recurring profile
**/
export class InvoiceRecurringApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=DayOfMonth" })
  dayOfMonth?: number;

  @Metadata({ data: "json, name=DayOfWeek" })
  dayOfWeek?: InvoiceRecurringApiModelDayOfWeekEnum;

  @Metadata({ data: "json, name=DueDateInDays" })
  dueDateInDays?: number;

  @Metadata({ data: "json, name=EndOfRecurrance" })
  endOfRecurrance?: Date;

  @Metadata({ data: "json, name=Month" })
  month?: number;

  @Metadata({ data: "json, name=RecurrancePattern" })
  recurrancePattern?: InvoiceRecurringApiModelRecurrancePatternEnum;

  @Metadata({ data: "json, name=RecurranceValue" })
  recurranceValue?: number;

  @Metadata({ data: "json, name=StartOfRecurrance" })
  startOfRecurrance?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: InvoiceRecurringApiModelStatusEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
