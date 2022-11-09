import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListApplicationsRequest
/** 
 * <p/>
**/
export class ListApplicationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartApplicationName" })
  exclusiveStartApplicationName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
