import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaxRateTaxRateStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived"
}


export class TaxRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: any[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effective_tax_rate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=original_tax_rate_id" })
  originalTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=report_tax_type" })
  reportTaxType?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaxRateTaxRateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tax_payable_account_id" })
  taxPayableAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_remitted_account_id" })
  taxRemittedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=total_tax_rate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}


export class TaxRateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: any[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effective_tax_rate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=original_tax_rate_id" })
  originalTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=report_tax_type" })
  reportTaxType?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaxRateTaxRateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tax_payable_account_id" })
  taxPayableAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_remitted_account_id" })
  taxRemittedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=total_tax_rate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
