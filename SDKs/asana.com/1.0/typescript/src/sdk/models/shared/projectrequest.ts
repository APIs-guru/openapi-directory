import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { UserCompact } from "./usercompact";
import { CustomFieldSettingCompact } from "./customfieldsettingcompact";
import { UserCompact } from "./usercompact";

export enum ProjectRequestColorEnum {
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

export enum ProjectRequestCurrentStatusColorEnum {
    Green = "green"
,    Yellow = "yellow"
,    Red = "red"
,    Blue = "blue"
}


export class ProjectRequestCurrentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: UserCompact;

  @Metadata({ data: "json, name=color" })
  color: ProjectRequestCurrentStatusColorEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_text" })
  htmlText?: string;

  @Metadata({ data: "json, name=modified_at" })
  modifiedAt?: Date;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

export enum ProjectRequestDefaultViewEnum {
    List = "list"
,    Board = "board"
,    Calendar = "calendar"
,    Timeline = "timeline"
}


export class ProjectRequestWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class ProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=color" })
  color?: ProjectRequestColorEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=current_status" })
  currentStatus?: ProjectRequestCurrentStatus;

  @Metadata({ data: "json, name=custom_field_settings", elemType: shared.CustomFieldSettingCompact })
  customFieldSettings?: CustomFieldSettingCompact[];

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, string>;

  @Metadata({ data: "json, name=default_view" })
  defaultView?: ProjectRequestDefaultViewEnum;

  @Metadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=followers" })
  followers?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @Metadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @Metadata({ data: "json, name=members", elemType: shared.UserCompact })
  members?: UserCompact[];

  @Metadata({ data: "json, name=modified_at" })
  modifiedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: Date;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=workspace" })
  workspace?: ProjectRequestWorkspace;
}
