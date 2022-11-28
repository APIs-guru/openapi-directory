import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAssociationStatusInfo } from "./instanceassociationstatusinfo";



export class DescribeInstanceAssociationsStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceAssociationStatusInfos", elemType: InstanceAssociationStatusInfo })
  instanceAssociationStatusInfos?: InstanceAssociationStatusInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
