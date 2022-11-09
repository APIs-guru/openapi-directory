import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IngressSource
/** 
 * The source that IngressPolicy authorizes access from.
**/
export class IngressSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevel" })
  accessLevel?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
