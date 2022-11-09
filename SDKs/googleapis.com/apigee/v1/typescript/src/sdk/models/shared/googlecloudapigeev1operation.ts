import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1Operation
/** 
 * Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.
**/
export class GoogleCloudApigeeV1Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=methods" })
  methods?: string[];

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
