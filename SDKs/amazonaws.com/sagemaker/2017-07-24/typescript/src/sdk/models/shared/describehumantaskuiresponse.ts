import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HumanTaskUiStatusEnum } from "./humantaskuistatusenum";
import { UiTemplateInfo } from "./uitemplateinfo";


export class DescribeHumanTaskUiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;

  @Metadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;

  @Metadata({ data: "json, name=HumanTaskUiStatus" })
  humanTaskUiStatus?: HumanTaskUiStatusEnum;

  @Metadata({ data: "json, name=UiTemplate" })
  uiTemplate: UiTemplateInfo;
}
