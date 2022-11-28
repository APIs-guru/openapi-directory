import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductDto extends SpeakeasyBase {
    details?: string[];
    grossUnitPrice?: boolean;
    hasDefaultVatRate?: boolean;
    id?: number;
    stockCode?: string;
    timestamp?: string;
    unitPrice?: number;
    vatAnalysisTypeId?: number;
    vatRateId?: number;
}
