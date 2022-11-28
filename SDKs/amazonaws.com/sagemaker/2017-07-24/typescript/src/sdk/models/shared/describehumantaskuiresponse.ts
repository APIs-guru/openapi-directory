import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskUiStatusEnum } from "./humantaskuistatusenum";
import { UiTemplateInfo } from "./uitemplateinfo";



export class DescribeHumanTaskUiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;

  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;

  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiStatus" })
  humanTaskUiStatus?: HumanTaskUiStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UiTemplate" })
  uiTemplate: UiTemplateInfo;
}
