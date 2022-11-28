import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationJurisdictionEnum } from "./organization";
/**
 * An organization connected to data hub
**/
export declare class Organization1 extends SpeakeasyBase {
    countyName?: string;
    description: string;
    jurisdiction: OrganizationJurisdictionEnum;
    name: string;
    stateCode?: string;
}
