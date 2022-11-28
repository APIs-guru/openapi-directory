import { SpeakeasyBase } from "../../../internal/utils";
import { CompanySettingDto } from "./companysettingdto";
export declare class PageResultCompanySettingDto extends SpeakeasyBase {
    count?: number;
    items?: CompanySettingDto[];
    nextPageLink?: string;
}
