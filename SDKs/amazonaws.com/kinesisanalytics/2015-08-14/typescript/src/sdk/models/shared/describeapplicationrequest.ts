import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeApplicationRequest
/** 
 * <p/>
**/
export class DescribeApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;
}
