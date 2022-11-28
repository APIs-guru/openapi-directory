import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDetail } from "./applicationdetail";



export class DescribeApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationDetail" })
  applicationDetail: ApplicationDetail;
}
