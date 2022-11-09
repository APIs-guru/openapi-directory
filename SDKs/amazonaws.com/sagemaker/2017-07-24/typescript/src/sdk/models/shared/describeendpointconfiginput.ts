import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEndpointConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;
}
