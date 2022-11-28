import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDto } from "./accountdto";
export declare class PageResultAccountDto extends SpeakeasyBase {
    count?: number;
    items?: AccountDto[];
    nextPageLink?: string;
}
