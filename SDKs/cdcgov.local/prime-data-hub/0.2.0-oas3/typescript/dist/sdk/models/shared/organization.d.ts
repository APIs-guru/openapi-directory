import { SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
export declare enum OrganizationJurisdictionEnum {
    National = "National",
    State = "State",
    County = "County"
}
/**
 * An organization connected to data hub
**/
export declare class Organization extends SpeakeasyBase {
    countyName?: string;
    description: string;
    jurisdiction: OrganizationJurisdictionEnum;
    meta?: SettingMetadata;
    name: string;
    stateCode?: string;
}
