import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteApplicationRequest
/** 
 * <p/>
**/
export class DeleteApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp: Date;
}
