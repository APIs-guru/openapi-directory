import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
export declare enum LeadsSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name",
    FirstName = "first_name",
    LastName = "last_name",
    Email = "email"
}
export declare class LeadsSort extends SpeakeasyBase {
    by?: LeadsSortByEnum;
    direction?: SortDirectionEnum;
}
