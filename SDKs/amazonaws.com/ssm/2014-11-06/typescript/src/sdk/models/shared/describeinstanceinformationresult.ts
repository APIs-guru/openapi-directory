import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformation } from "./instanceinformation";



export class DescribeInstanceInformationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceInformationList", elemType: InstanceInformation })
  instanceInformationList?: InstanceInformation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
