import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationalUnit } from "./organizationalunit";


export class ListOrganizationalUnitsForParentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationalUnits", elemType: shared.OrganizationalUnit })
  organizationalUnits?: OrganizationalUnit[];
}
