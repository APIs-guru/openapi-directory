import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WafAction } from "./wafaction";
import { Tag } from "./tag";



export class CreateWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultAction" })
  defaultAction: WafAction;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
