import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeApplicationRequest
/** 
 * <p/>
**/
export class DescribeApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;
}
