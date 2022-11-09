import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelCommandRequest
/** 
 * <p/>
**/
export class CancelCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommandId" })
  commandId: string;

  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];
}
