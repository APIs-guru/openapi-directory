import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1Operation
/** 
 * Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.
**/
export class GoogleCloudApigeeV1Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methods" })
  methods?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
