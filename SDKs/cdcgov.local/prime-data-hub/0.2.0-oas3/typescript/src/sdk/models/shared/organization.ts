import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";


export enum OrganizationJurisdictionEnum {
    National = "National",
    State = "State",
    County = "County"
}


// Organization
/** 
 * An organization connected to data hub
**/
export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countyName" })
  countyName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdiction" })
  jurisdiction: OrganizationJurisdictionEnum;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: SettingMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=stateCode" })
  stateCode?: string;
}
