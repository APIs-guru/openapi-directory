import { SpeakeasyBase } from "../../../internal/utils";
import { Transactions } from "./transactions";
export declare enum BalanceVariationEnum {
    Gsb = "gsb",
    Erzeugung = "erzeugung",
    Eigenstrom = "eigenstrom",
    Co2 = "co2",
    Baeume = "baeume"
}
export declare class Balance extends SpeakeasyBase {
    balance?: number;
    haben?: number;
    soll?: number;
    txs?: Transactions[];
    variation?: BalanceVariationEnum;
}
