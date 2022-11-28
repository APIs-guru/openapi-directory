import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfigSummary } from "./endpointconfigsummary";



export class ListEndpointConfigsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigs", elemType: EndpointConfigSummary })
  endpointConfigs: EndpointConfigSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
