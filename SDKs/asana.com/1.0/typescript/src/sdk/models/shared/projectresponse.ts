import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { UserCompact } from "./usercompact";
import { CustomFieldSettingCompact } from "./customfieldsettingcompact";
import { CustomFieldCompact } from "./customfieldcompact";
import { UserCompact } from "./usercompact";
import { UserCompact } from "./usercompact";

export enum ProjectResponseColorEnum {
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

export enum ProjectResponseCurrentStatusColorEnum {
    Green = "green"
,    Yellow = "yellow"
,    Red = "red"
,    Blue = "blue"
}


export class ProjectResponseCurrentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: UserCompact;

  @Metadata({ data: "json, name=color" })
  color: ProjectResponseCurrentStatusColorEnum;

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

export enum ProjectResponseDefaultViewEnum {
    List = "list"
,    Board = "board"
,    Calendar = "calendar"
,    Timeline = "timeline"
}

export enum ProjectResponseIconEnum {
    List = "list"
,    Board = "board"
,    Timeline = "timeline"
,    Calendar = "calendar"
,    Rocket = "rocket"
,    People = "people"
,    Graph = "graph"
,    Star = "star"
,    Bug = "bug"
,    LightBulb = "light_bulb"
,    Globe = "globe"
,    Gear = "gear"
,    Notebook = "notebook"
,    Computer = "computer"
,    Check = "check"
,    Target = "target"
,    Html = "html"
,    Megaphone = "megaphone"
,    ChatBubbles = "chat_bubbles"
,    Briefcase = "briefcase"
,    PageLayout = "page_layout"
,    MountainFlag = "mountain_flag"
,    Puzzle = "puzzle"
,    Presentation = "presentation"
,    LineAndSymbols = "line_and_symbols"
,    SpeedDial = "speed_dial"
,    Ribbon = "ribbon"
,    Shoe = "shoe"
,    ShoppingBasket = "shopping_basket"
,    Map = "map"
,    Ticket = "ticket"
,    Coins = "coins"
}


// ProjectResponseOwner
/** 
 * The current owner of the project, may be null.
**/
export class ProjectResponseOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class ProjectResponseTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class ProjectResponseWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class ProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=color" })
  color?: ProjectResponseColorEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=current_status" })
  currentStatus?: ProjectResponseCurrentStatus;

  @Metadata({ data: "json, name=custom_field_settings", elemType: shared.CustomFieldSettingCompact })
  customFieldSettings?: CustomFieldSettingCompact[];

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomFieldCompact })
  customFields?: CustomFieldCompact[];

  @Metadata({ data: "json, name=default_view" })
  defaultView?: ProjectResponseDefaultViewEnum;

  @Metadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=followers", elemType: shared.UserCompact })
  followers?: UserCompact[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @Metadata({ data: "json, name=icon" })
  icon?: ProjectResponseIconEnum;

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
  owner?: ProjectResponseOwner;

  @Metadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: Date;

  @Metadata({ data: "json, name=team" })
  team?: ProjectResponseTeam;

  @Metadata({ data: "json, name=workspace" })
  workspace?: ProjectResponseWorkspace;
}
