import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArimaOrder
/** 
 * Arima order, can be used for both non-seasonal and seasonal parts.
**/
export class ArimaOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=d" })
  d?: string;

  @Metadata({ data: "json, name=p" })
  p?: string;

  @Metadata({ data: "json, name=q" })
  q?: string;
}
