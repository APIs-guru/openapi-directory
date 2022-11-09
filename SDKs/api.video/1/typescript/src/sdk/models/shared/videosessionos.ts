import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoSessionOs
/** 
 * The operating system the viewer is on.
**/
export class VideoSessionOs extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=shortname" })
  shortname?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
