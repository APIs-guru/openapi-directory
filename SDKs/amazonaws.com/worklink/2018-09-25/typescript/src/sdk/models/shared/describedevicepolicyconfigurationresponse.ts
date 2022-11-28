import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDevicePolicyConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceCaCertificate" })
  deviceCaCertificate?: string;
}
