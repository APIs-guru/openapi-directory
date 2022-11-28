import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Transactions } from "./transactions";


export enum BalanceVariationEnum {
    Gsb = "gsb",
    Erzeugung = "erzeugung",
    Eigenstrom = "eigenstrom",
    Co2 = "co2",
    Baeume = "baeume"
}


export class Balance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=haben" })
  haben?: number;

  @SpeakeasyMetadata({ data: "json, name=soll" })
  soll?: number;

  @SpeakeasyMetadata({ data: "json, name=txs", elemType: Transactions })
  txs?: Transactions[];

  @SpeakeasyMetadata({ data: "json, name=variation" })
  variation?: BalanceVariationEnum;
}
