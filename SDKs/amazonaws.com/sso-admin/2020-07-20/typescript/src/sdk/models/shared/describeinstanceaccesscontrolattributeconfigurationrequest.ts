import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
