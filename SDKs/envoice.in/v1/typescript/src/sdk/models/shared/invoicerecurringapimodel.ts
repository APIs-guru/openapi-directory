import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoiceRecurringApiModelDayOfWeekEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

export enum InvoiceRecurringApiModelRecurrancePatternEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Yearly = "Yearly"
}

export enum InvoiceRecurringApiModelStatusEnum {
    Pending = "Pending",
    Active = "Active",
    Cancelled = "Cancelled",
    Finished = "Finished"
}


// InvoiceRecurringApiModel
/** 
 * Definition of invoice recurring profile
**/
export class InvoiceRecurringApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DayOfMonth" })
  dayOfMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=DayOfWeek" })
  dayOfWeek?: InvoiceRecurringApiModelDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=DueDateInDays" })
  dueDateInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=EndOfRecurrance" })
  endOfRecurrance?: Date;

  @SpeakeasyMetadata({ data: "json, name=Month" })
  month?: number;

  @SpeakeasyMetadata({ data: "json, name=RecurrancePattern" })
  recurrancePattern?: InvoiceRecurringApiModelRecurrancePatternEnum;

  @SpeakeasyMetadata({ data: "json, name=RecurranceValue" })
  recurranceValue?: number;

  @SpeakeasyMetadata({ data: "json, name=StartOfRecurrance" })
  startOfRecurrance?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InvoiceRecurringApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
