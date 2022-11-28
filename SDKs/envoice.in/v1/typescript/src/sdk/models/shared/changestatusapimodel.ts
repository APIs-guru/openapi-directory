import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChangeStatusApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class ChangeStatusApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status?: ChangeStatusApiModelStatusEnum;
}
