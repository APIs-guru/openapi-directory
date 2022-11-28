import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
