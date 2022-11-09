import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HovercardContexts extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=octicon" })
  octicon: string;
}


// Hovercard
/** 
 * Hovercard
**/
export class Hovercard extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.HovercardContexts })
  contexts: HovercardContexts[];
}
