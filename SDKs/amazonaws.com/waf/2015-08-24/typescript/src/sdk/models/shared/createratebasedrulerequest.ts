import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateKeyEnum } from "./ratekeyenum";
import { Tag } from "./tag";



export class CreateRateBasedRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RateKey" })
  rateKey: RateKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=RateLimit" })
  rateLimit: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
