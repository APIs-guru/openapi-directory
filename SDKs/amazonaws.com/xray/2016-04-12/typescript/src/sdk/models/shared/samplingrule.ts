import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamplingRule
/** 
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
export class SamplingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=FixedRate" })
  fixedRate: number;

  @SpeakeasyMetadata({ data: "json, name=HTTPMethod" })
  httpMethod: string;

  @SpeakeasyMetadata({ data: "json, name=Host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=ReservoirSize" })
  reservoirSize: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RuleARN" })
  ruleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceType" })
  serviceType: string;

  @SpeakeasyMetadata({ data: "json, name=URLPath" })
  urlPath: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: number;
}
