import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceState
/** 
 * Describes the virtual private server (or <i>instance</i>) status.
**/
export class InstanceState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
