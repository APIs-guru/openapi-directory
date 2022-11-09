import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointConfigSummary } from "./endpointconfigsummary";


export class ListEndpointConfigsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointConfigs", elemType: shared.EndpointConfigSummary })
  endpointConfigs: EndpointConfigSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
