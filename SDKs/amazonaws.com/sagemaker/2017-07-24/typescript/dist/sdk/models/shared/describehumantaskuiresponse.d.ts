import { SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskUiStatusEnum } from "./humantaskuistatusenum";
import { UiTemplateInfo } from "./uitemplateinfo";
export declare class DescribeHumanTaskUiResponse extends SpeakeasyBase {
    creationTime: Date;
    humanTaskUiArn: string;
    humanTaskUiName: string;
    humanTaskUiStatus?: HumanTaskUiStatusEnum;
    uiTemplate: UiTemplateInfo;
}
