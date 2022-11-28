import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationalUnit } from "./organizationalunit";



export class ListOrganizationalUnitsForParentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnits", elemType: OrganizationalUnit })
  organizationalUnits?: OrganizationalUnit[];
}
