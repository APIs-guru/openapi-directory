import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RenderableTask } from "./renderabletask";
import { UiTemplate } from "./uitemplate";



export class RenderUiTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Task" })
  task: RenderableTask;

  @SpeakeasyMetadata({ data: "json, name=UiTemplate" })
  uiTemplate?: UiTemplate;
}
