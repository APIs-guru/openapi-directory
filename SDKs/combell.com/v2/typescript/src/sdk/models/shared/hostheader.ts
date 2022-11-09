import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HostHeader
/** 
 * A host header identifies a web domain.
**/
export class HostHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
