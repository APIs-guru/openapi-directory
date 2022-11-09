import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceItem } from "./complianceitem";


export class ListComplianceItemsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceItems", elemType: shared.ComplianceItem })
  complianceItems?: ComplianceItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
