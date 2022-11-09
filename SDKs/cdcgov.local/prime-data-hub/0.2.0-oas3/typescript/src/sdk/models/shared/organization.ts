import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingMetadata } from "./settingmetadata";

export enum OrganizationJurisdictionEnum {
    National = "National"
,    State = "State"
,    County = "County"
}


// Organization
/** 
 * An organization connected to data hub
**/
export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=countyName" })
  countyName?: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=jurisdiction" })
  jurisdiction: OrganizationJurisdictionEnum;

  @Metadata({ data: "json, name=meta" })
  meta?: SettingMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=stateCode" })
  stateCode?: string;
}
