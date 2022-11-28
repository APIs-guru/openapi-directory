import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDetail } from "./applicationdetail";



// DescribeApplicationResponse
/** 
 * <p/>
**/
export class DescribeApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationDetail" })
  applicationDetail: ApplicationDetail;
}
