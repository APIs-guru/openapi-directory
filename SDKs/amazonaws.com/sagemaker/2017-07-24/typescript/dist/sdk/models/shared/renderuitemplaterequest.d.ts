import { SpeakeasyBase } from "../../../internal/utils";
import { RenderableTask } from "./renderabletask";
import { UiTemplate } from "./uitemplate";
export declare class RenderUiTemplateRequest extends SpeakeasyBase {
    humanTaskUiArn?: string;
    roleArn: string;
    task: RenderableTask;
    uiTemplate?: UiTemplate;
}
