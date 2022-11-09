import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionDetail } from "./serviceactiondetail";


export class DescribeServiceActionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceActionDetail" })
  serviceActionDetail?: ServiceActionDetail;
}
