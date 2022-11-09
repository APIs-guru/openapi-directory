import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ResourceFile
/** 
 * Metadata about a resource file.
**/
export class GoogleCloudApigeeV1ResourceFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
