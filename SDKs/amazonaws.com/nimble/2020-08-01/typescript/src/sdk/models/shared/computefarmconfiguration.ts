import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComputeFarmConfiguration
/** 
 * The configuration for a render farm that is associated with a studio resource.
**/
export class ComputeFarmConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDirectoryUser" })
  activeDirectoryUser?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}
