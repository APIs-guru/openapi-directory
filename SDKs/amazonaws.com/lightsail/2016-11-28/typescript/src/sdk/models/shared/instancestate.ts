import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceState
/** 
 * Describes the virtual private server (or <i>instance</i>) status.
**/
export class InstanceState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
