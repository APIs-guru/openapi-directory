import { SpeakeasyBase } from "../../../internal/utils";
export declare class VatRateDto extends SpeakeasyBase {
    id?: number;
    isActive?: boolean;
    isDefault?: boolean;
    orderIndex?: number;
    percentage?: number;
    timestamp?: string;
    vatCategoryId?: number;
}
