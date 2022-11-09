import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EstimationChangeStatusApiModelStatusEnum {
    Draft = "Draft"
,    Accepted = "Accepted"
,    Rejected = "Rejected"
}


export class EstimationChangeStatusApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Status, form, name=Status;" })
  status?: EstimationChangeStatusApiModelStatusEnum;
}
