import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceItem } from "./complianceitem";



export class ListComplianceItemsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceItems", elemType: ComplianceItem })
  complianceItems?: ComplianceItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
