import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelCommandRequest
/** 
 * <p/>
**/
export class CancelCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];
}
