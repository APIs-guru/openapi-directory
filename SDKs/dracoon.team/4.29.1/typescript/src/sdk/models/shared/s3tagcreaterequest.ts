import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3TagCreateRequest
/** 
 * Request model for creating a S3 tag
**/
export class S3TagCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMandatory" })
  isMandatory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
