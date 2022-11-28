import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAssociation } from "./instanceassociation";



export class DescribeEffectiveInstanceAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Associations", elemType: InstanceAssociation })
  associations?: InstanceAssociation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
