import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationDetail } from "./applicationdetail";


// DescribeApplicationResponse
/** 
 * <p/>
**/
export class DescribeApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationDetail" })
  applicationDetail: ApplicationDetail;
}
