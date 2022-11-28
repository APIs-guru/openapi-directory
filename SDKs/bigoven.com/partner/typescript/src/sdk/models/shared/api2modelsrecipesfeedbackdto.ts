import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ModelsRecipesFeedbackDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedback, form, name=feedback;" })
  feedback?: string;
}
