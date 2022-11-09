import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";

export enum ContactsSortByEnum {
    CreatedAt = "created_at"
,    UpdatedAt = "updated_at"
,    Name = "name"
,    FirstName = "first_name"
,    LastName = "last_name"
,    Email = "email"
}


export class ContactsSort extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=by" })
  by?: ContactsSortByEnum;

  @Metadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
