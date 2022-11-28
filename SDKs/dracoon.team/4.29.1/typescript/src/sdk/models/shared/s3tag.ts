import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Tag
/** 
 * S3 tag information
**/
export class S3Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isMandatory" })
  isMandatory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
