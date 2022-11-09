import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineCacheContentUri
/** 
 * A representation of the location of pipeline cache content.
**/
export class PipelineCacheContentUri extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
