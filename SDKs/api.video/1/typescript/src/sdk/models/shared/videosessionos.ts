import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoSessionOs
/** 
 * The operating system the viewer is on.
**/
export class VideoSessionOs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=shortname" })
  shortname?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
