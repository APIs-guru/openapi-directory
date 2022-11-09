import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceAssociation } from "./instanceassociation";


export class DescribeEffectiveInstanceAssociationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Associations", elemType: shared.InstanceAssociation })
  associations?: InstanceAssociation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
