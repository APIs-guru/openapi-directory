import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopApplicationRequest
/** 
 * <p/>
**/
export class StopApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;
}
