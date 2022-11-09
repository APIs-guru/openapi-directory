import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WafAction } from "./wafaction";
import { Tag } from "./tag";


export class CreateWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=DefaultAction" })
  defaultAction: WafAction;

  @Metadata({ data: "json, name=MetricName" })
  metricName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
