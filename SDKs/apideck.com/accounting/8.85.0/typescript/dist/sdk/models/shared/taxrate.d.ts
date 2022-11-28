import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaxRateTaxRateStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived"
}
export declare class TaxRate extends SpeakeasyBase {
    code?: string;
    components?: any[];
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    effectiveTaxRate?: number;
    id?: string;
    name?: string;
    originalTaxRateId?: string;
    reportTaxType?: string;
    rowVersion?: string;
    status?: TaxRateTaxRateStatusEnum;
    taxPayableAccountId?: string;
    taxRemittedAccountId?: string;
    totalTaxRate?: number;
    type?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class TaxRateInput extends SpeakeasyBase {
    code?: string;
    components?: any[];
    description?: string;
    effectiveTaxRate?: number;
    id?: string;
    name?: string;
    originalTaxRateId?: string;
    reportTaxType?: string;
    rowVersion?: string;
    status?: TaxRateTaxRateStatusEnum;
    taxPayableAccountId?: string;
    taxRemittedAccountId?: string;
    totalTaxRate?: number;
    type?: string;
}
