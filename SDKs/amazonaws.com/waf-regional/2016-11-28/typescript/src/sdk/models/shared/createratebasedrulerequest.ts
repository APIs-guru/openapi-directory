import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RateKeyEnum } from "./ratekeyenum";
import { Tag } from "./tag";


export class CreateRateBasedRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=MetricName" })
  metricName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RateKey" })
  rateKey: RateKeyEnum;

  @Metadata({ data: "json, name=RateLimit" })
  rateLimit: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
