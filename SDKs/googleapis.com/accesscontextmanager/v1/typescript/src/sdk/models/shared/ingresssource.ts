import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IngressSource
/** 
 * The source that IngressPolicy authorizes access from.
**/
export class IngressSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevel" })
  accessLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
