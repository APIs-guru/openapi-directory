import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";


export enum LeadsSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name",
    FirstName = "first_name",
    LastName = "last_name",
    Email = "email"
}


export class LeadsSort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=by" })
  by?: LeadsSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
