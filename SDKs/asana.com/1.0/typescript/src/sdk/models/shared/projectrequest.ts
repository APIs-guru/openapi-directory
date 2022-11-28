import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";


export enum ProjectRequestColorEnum {
    DarkPink = "dark-pink",
    DarkGreen = "dark-green",
    DarkBlue = "dark-blue",
    DarkRed = "dark-red",
    DarkTeal = "dark-teal",
    DarkBrown = "dark-brown",
    DarkOrange = "dark-orange",
    DarkPurple = "dark-purple",
    DarkWarmGray = "dark-warm-gray",
    LightPink = "light-pink",
    LightGreen = "light-green",
    LightBlue = "light-blue",
    LightRed = "light-red",
    LightTeal = "light-teal",
    LightBrown = "light-brown",
    LightOrange = "light-orange",
    LightPurple = "light-purple",
    LightWarmGray = "light-warm-gray"
}

export enum ProjectRequestCurrentStatusColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}


export class ProjectRequestCurrentStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserCompactInput;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color: ProjectRequestCurrentStatusColorEnum;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: UserCompactInput;

  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

export enum ProjectRequestDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}


export class ProjectRequestWorkspaceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ProjectRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: ProjectRequestColorEnum;

  @SpeakeasyMetadata({ data: "json, name=current_status" })
  currentStatus?: ProjectRequestCurrentStatusInput;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=default_view" })
  defaultView?: ProjectRequestDefaultViewEnum;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: string;

  @SpeakeasyMetadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: ProjectRequestWorkspaceInput;
}
