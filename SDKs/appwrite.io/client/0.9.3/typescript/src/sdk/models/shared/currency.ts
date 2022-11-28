import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Currency
/** 
 * Currency
**/
export class Currency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=decimalDigits" })
  decimalDigits: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=namePlural" })
  namePlural: string;

  @SpeakeasyMetadata({ data: "json, name=rounding" })
  rounding: number;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol: string;

  @SpeakeasyMetadata({ data: "json, name=symbolNative" })
  symbolNative: string;
}
