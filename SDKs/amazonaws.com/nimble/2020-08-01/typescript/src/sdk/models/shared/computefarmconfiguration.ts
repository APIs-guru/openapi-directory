import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeFarmConfiguration
/** 
 * The configuration for a render farm that is associated with a studio resource.
**/
export class ComputeFarmConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDirectoryUser" })
  activeDirectoryUser?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}
