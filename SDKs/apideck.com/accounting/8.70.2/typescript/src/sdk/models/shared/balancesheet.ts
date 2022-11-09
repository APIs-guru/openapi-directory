import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BalanceSheetAssetsCurrentAssetsAccounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetAssetsCurrentAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.BalanceSheetAssetsCurrentAssetsAccounts })
  accounts: BalanceSheetAssetsCurrentAssetsAccounts[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetAssetsFixedAssetsAccounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetAssetsFixedAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.BalanceSheetAssetsFixedAssetsAccounts })
  accounts: BalanceSheetAssetsFixedAssetsAccounts[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_assets" })
  currentAssets: BalanceSheetAssetsCurrentAssets;

  @Metadata({ data: "json, name=fixed_assets" })
  fixedAssets: BalanceSheetAssetsFixedAssets;

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetEquityItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetEquity extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BalanceSheetEquityItems })
  items: BalanceSheetEquityItems[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetLiabilitiesAccounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetLiabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.BalanceSheetLiabilitiesAccounts })
  accounts: BalanceSheetLiabilitiesAccounts[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheet extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: BalanceSheetAssets;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=equity" })
  equity: BalanceSheetEquity;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=liabilities" })
  liabilities: BalanceSheetLiabilities;

  @Metadata({ data: "json, name=report_name" })
  reportName: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
