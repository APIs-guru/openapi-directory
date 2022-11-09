import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRdsDbInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RdsDbInstanceArns" })
  rdsDbInstanceArns?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
