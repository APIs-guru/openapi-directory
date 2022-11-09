import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChangeStatusApiModelStatusEnum {
    Draft = "Draft"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    Void = "Void"
}


export class ChangeStatusApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Status, form, name=Status;" })
  status?: ChangeStatusApiModelStatusEnum;
}
