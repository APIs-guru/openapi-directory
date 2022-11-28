import { SpeakeasyBase } from "../../../internal/utils";
export declare class BalanceSheetAssetsCurrentAssetsAccounts extends SpeakeasyBase {
    id?: string;
    name?: string;
    value?: number;
}
export declare class BalanceSheetAssetsCurrentAssets extends SpeakeasyBase {
    accounts: BalanceSheetAssetsCurrentAssetsAccounts[];
    total: number;
}
export declare class BalanceSheetAssetsFixedAssetsAccounts extends SpeakeasyBase {
    id?: string;
    name?: string;
    value?: number;
}
export declare class BalanceSheetAssetsFixedAssets extends SpeakeasyBase {
    accounts: BalanceSheetAssetsFixedAssetsAccounts[];
    total: number;
}
export declare class BalanceSheetAssets extends SpeakeasyBase {
    currentAssets: BalanceSheetAssetsCurrentAssets;
    fixedAssets: BalanceSheetAssetsFixedAssets;
    total: number;
}
export declare class BalanceSheetEquityItems extends SpeakeasyBase {
    id?: string;
    name?: string;
    value?: number;
}
export declare class BalanceSheetEquity extends SpeakeasyBase {
    items: BalanceSheetEquityItems[];
    total: number;
}
export declare class BalanceSheetLiabilitiesAccounts extends SpeakeasyBase {
    id?: string;
    name?: string;
    value?: number;
}
export declare class BalanceSheetLiabilities extends SpeakeasyBase {
    accounts: BalanceSheetLiabilitiesAccounts[];
    total: number;
}
export declare class BalanceSheet extends SpeakeasyBase {
    assets: BalanceSheetAssets;
    createdAt?: Date;
    createdBy?: string;
    endDate?: string;
    equity: BalanceSheetEquity;
    id?: string;
    liabilities: BalanceSheetLiabilities;
    reportName: string;
    startDate: string;
    updatedAt?: Date;
    updatedBy?: string;
}
