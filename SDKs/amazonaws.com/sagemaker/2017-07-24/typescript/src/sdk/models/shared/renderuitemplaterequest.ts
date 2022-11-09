import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RenderableTask } from "./renderabletask";
import { UiTemplate } from "./uitemplate";


export class RenderUiTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Task" })
  task: RenderableTask;

  @Metadata({ data: "json, name=UiTemplate" })
  uiTemplate?: UiTemplate;
}
