import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Transactions } from "./transactions";

export enum BalanceVariationEnum {
    Gsb = "gsb"
,    Erzeugung = "erzeugung"
,    Eigenstrom = "eigenstrom"
,    Co2 = "co2"
,    Baeume = "baeume"
}


export class Balance extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=haben" })
  haben?: number;

  @Metadata({ data: "json, name=soll" })
  soll?: number;

  @Metadata({ data: "json, name=txs", elemType: shared.Transactions })
  txs?: Transactions[];

  @Metadata({ data: "json, name=variation" })
  variation?: BalanceVariationEnum;
}
