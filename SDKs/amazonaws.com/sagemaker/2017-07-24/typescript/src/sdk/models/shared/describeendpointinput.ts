import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
