import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListApplicationsRequest
/** 
 * <p/>
**/
export class ListApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartApplicationName" })
  exclusiveStartApplicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
