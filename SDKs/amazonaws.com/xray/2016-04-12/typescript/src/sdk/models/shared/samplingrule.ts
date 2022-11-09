import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SamplingRule
/** 
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
export class SamplingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=FixedRate" })
  fixedRate: number;

  @Metadata({ data: "json, name=HTTPMethod" })
  httpMethod: string;

  @Metadata({ data: "json, name=Host" })
  host: string;

  @Metadata({ data: "json, name=Priority" })
  priority: number;

  @Metadata({ data: "json, name=ReservoirSize" })
  reservoirSize: number;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RuleARN" })
  ruleArn?: string;

  @Metadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName: string;

  @Metadata({ data: "json, name=ServiceType" })
  serviceType: string;

  @Metadata({ data: "json, name=URLPath" })
  urlPath: string;

  @Metadata({ data: "json, name=Version" })
  version: number;
}
