import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { CustomFieldSettingResponse } from "./customfieldsettingresponse";
import { UserCompact } from "./usercompact";
import { UserCompact } from "./usercompact";

export enum PortfolioResponseColorEnum {
    DarkPink = "dark-pink"
,    DarkGreen = "dark-green"
,    DarkBlue = "dark-blue"
,    DarkRed = "dark-red"
,    DarkTeal = "dark-teal"
,    DarkBrown = "dark-brown"
,    DarkOrange = "dark-orange"
,    DarkPurple = "dark-purple"
,    DarkWarmGray = "dark-warm-gray"
,    LightPink = "light-pink"
,    LightGreen = "light-green"
,    LightBlue = "light-blue"
,    LightRed = "light-red"
,    LightTeal = "light-teal"
,    LightBrown = "light-brown"
,    LightOrange = "light-orange"
,    LightPurple = "light-purple"
,    LightWarmGray = "light-warm-gray"
}


export class PortfolioResponseWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class PortfolioResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: PortfolioResponseColorEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @Metadata({ data: "json, name=custom_field_settings", elemType: shared.CustomFieldSettingResponse })
  customFieldSettings?: CustomFieldSettingResponse[];

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=members", elemType: shared.UserCompact })
  members?: UserCompact[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: UserCompact;

  @Metadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: Date;

  @Metadata({ data: "json, name=workspace" })
  workspace?: PortfolioResponseWorkspace;
}
