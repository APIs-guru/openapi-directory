import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationalUnit } from "./organizationalunit";
export declare class ListOrganizationalUnitsForParentResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationalUnits?: OrganizationalUnit[];
}
