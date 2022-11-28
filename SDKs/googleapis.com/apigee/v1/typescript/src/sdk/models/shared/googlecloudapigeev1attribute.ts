import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1Attribute
/** 
 * Key-value pair to store extra metadata.
**/
export class GoogleCloudApigeeV1Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
