import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceAssociationStatusInfo } from "./instanceassociationstatusinfo";


export class DescribeInstanceAssociationsStatusResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceAssociationStatusInfos", elemType: shared.InstanceAssociationStatusInfo })
  instanceAssociationStatusInfos?: InstanceAssociationStatusInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
