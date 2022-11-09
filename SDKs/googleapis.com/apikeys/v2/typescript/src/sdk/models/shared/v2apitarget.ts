import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2ApiTarget
/** 
 * A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
**/
export class V2ApiTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=methods" })
  methods?: string[];

  @Metadata({ data: "json, name=service" })
  service?: string;
}
