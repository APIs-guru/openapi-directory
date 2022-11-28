import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArimaOrder
/** 
 * Arima order, can be used for both non-seasonal and seasonal parts.
**/
export class ArimaOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=d" })
  d?: string;

  @SpeakeasyMetadata({ data: "json, name=p" })
  p?: string;

  @SpeakeasyMetadata({ data: "json, name=q" })
  q?: string;
}
