import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { LfTagPair } from "./lftagpair";



// LfTagError
/** 
 * A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
**/
export class LfTagError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=LFTag" })
  lfTag?: LfTagPair;
}
