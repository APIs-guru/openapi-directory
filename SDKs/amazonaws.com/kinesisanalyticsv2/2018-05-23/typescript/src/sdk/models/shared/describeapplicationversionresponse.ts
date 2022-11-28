import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDetail } from "./applicationdetail";



export class DescribeApplicationVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionDetail" })
  applicationVersionDetail?: ApplicationDetail;
}
