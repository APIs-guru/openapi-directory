import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
export declare enum ContactsSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name",
    FirstName = "first_name",
    LastName = "last_name",
    Email = "email"
}
export declare class ContactsSort extends SpeakeasyBase {
    by?: ContactsSortByEnum;
    direction?: SortDirectionEnum;
}
