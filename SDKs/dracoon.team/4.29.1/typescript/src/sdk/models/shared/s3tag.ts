import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Tag
/** 
 * S3 tag information
**/
export class S3Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isMandatory" })
  isMandatory?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
