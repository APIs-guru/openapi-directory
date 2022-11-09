import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopApplicationRequest
/** 
 * <p/>
**/
export class StopApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;
}
