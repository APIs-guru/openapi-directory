import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EstimationChangeStatusApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}


export class EstimationChangeStatusApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status?: EstimationChangeStatusApiModelStatusEnum;
}
