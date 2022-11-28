import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionDetail } from "./serviceactiondetail";



export class DescribeServiceActionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceActionDetail" })
  serviceActionDetail?: ServiceActionDetail;
}
