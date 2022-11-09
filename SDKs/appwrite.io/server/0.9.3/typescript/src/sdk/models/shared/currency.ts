import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Currency
/** 
 * Currency
**/
export class Currency extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=decimalDigits" })
  decimalDigits: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=namePlural" })
  namePlural: string;

  @Metadata({ data: "json, name=rounding" })
  rounding: number;

  @Metadata({ data: "json, name=symbol" })
  symbol: string;

  @Metadata({ data: "json, name=symbolNative" })
  symbolNative: string;
}
