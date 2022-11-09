import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1Property
/** 
 * A single property entry in the Properties message.
**/
export class GoogleCloudApigeeV1Property extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
