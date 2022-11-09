import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3TagCreateRequest
/** 
 * Request model for creating a S3 tag
**/
export class S3TagCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMandatory" })
  isMandatory?: boolean;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
