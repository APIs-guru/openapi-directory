import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BalanceSheetAssetsCurrentAssetsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetAssetsCurrentAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: BalanceSheetAssetsCurrentAssetsAccounts })
  accounts: BalanceSheetAssetsCurrentAssetsAccounts[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetAssetsFixedAssetsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetAssetsFixedAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: BalanceSheetAssetsFixedAssetsAccounts })
  accounts: BalanceSheetAssetsFixedAssetsAccounts[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_assets" })
  currentAssets: BalanceSheetAssetsCurrentAssets;

  @SpeakeasyMetadata({ data: "json, name=fixed_assets" })
  fixedAssets: BalanceSheetAssetsFixedAssets;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetEquityItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetEquity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BalanceSheetEquityItems })
  items: BalanceSheetEquityItems[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheetLiabilitiesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class BalanceSheetLiabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: BalanceSheetLiabilitiesAccounts })
  accounts: BalanceSheetLiabilitiesAccounts[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class BalanceSheet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: BalanceSheetAssets;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=equity" })
  equity: BalanceSheetEquity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=liabilities" })
  liabilities: BalanceSheetLiabilities;

  @SpeakeasyMetadata({ data: "json, name=report_name" })
  reportName: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
