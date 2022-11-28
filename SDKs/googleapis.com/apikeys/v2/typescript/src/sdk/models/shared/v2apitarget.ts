import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2ApiTarget
/** 
 * A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
**/
export class V2ApiTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methods" })
  methods?: string[];

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
