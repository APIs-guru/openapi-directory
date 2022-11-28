import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HostHeader
/** 
 * A host header identifies a web domain.
**/
export class HostHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
