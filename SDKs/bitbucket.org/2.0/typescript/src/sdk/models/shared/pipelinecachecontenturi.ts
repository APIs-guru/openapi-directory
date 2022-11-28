import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineCacheContentUri
/** 
 * A representation of the location of pipeline cache content.
**/
export class PipelineCacheContentUri extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
