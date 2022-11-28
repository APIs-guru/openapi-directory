import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEndpointConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;
}
