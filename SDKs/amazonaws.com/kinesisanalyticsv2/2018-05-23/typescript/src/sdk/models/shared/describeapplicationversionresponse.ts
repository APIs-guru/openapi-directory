import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationDetail } from "./applicationdetail";


export class DescribeApplicationVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationVersionDetail" })
  applicationVersionDetail?: ApplicationDetail;
}
