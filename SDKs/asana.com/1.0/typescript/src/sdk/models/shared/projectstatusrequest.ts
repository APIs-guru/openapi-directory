import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectStatusRequestColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}


export class ProjectStatusRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: ProjectStatusRequestColorEnum;

  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
