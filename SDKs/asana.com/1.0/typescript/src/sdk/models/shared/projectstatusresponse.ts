import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserCompact } from "./usercompact";
import { UserCompact } from "./usercompact";

export enum ProjectStatusResponseColorEnum {
    Green = "green"
,    Yellow = "yellow"
,    Red = "red"
,    Blue = "blue"
}


export class ProjectStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: UserCompact;

  @Metadata({ data: "json, name=color" })
  color: ProjectStatusResponseColorEnum;

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
