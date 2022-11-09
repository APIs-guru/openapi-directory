import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";

export enum LeadsSortByEnum {
    CreatedAt = "created_at"
,    UpdatedAt = "updated_at"
,    Name = "name"
,    FirstName = "first_name"
,    LastName = "last_name"
,    Email = "email"
}


export class LeadsSort extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=by" })
  by?: LeadsSortByEnum;

  @Metadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
