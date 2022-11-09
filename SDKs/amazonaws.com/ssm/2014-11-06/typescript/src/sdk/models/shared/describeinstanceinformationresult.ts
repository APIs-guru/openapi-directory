import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceInformation } from "./instanceinformation";


export class DescribeInstanceInformationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceInformationList", elemType: shared.InstanceInformation })
  instanceInformationList?: InstanceInformation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
