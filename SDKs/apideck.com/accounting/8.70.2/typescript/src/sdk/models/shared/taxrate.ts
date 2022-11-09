import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TaxRateTaxRateStatusEnum {
    Active = "active"
,    Inactive = "inactive"
,    Archived = "archived"
}


export class TaxRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=components" })
  components?: any[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=effective_tax_rate" })
  effectiveTaxRate?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=original_tax_rate_id" })
  originalTaxRateId?: string;

  @Metadata({ data: "json, name=report_tax_type" })
  reportTaxType?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: TaxRateTaxRateStatusEnum;

  @Metadata({ data: "json, name=tax_payable_account_id" })
  taxPayableAccountId?: string;

  @Metadata({ data: "json, name=tax_remitted_account_id" })
  taxRemittedAccountId?: string;

  @Metadata({ data: "json, name=total_tax_rate" })
  totalTaxRate?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
