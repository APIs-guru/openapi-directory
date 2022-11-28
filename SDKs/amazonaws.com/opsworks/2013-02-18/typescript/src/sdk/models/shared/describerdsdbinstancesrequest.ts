import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRdsDbInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RdsDbInstanceArns" })
  rdsDbInstanceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
