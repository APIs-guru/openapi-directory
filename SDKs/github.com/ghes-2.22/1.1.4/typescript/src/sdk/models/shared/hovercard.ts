import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HovercardContexts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=octicon" })
  octicon: string;
}


// Hovercard
/** 
 * Hovercard
**/
export class Hovercard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: HovercardContexts })
  contexts: HovercardContexts[];
}
