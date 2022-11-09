import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectStatusRequestColorEnum {
    Green = "green"
,    Yellow = "yellow"
,    Red = "red"
,    Blue = "blue"
}


export class ProjectStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color: ProjectStatusRequestColorEnum;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_text" })
  htmlText?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
