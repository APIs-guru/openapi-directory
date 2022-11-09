import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";
import { LfTagPair } from "./lftagpair";


// LfTagError
/** 
 * A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
**/
export class LfTagError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: ErrorDetail;

  @Metadata({ data: "json, name=LFTag" })
  lfTag?: LfTagPair;
}
