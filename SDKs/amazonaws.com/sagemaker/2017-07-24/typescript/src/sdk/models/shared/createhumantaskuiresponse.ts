import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateHumanTaskUiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;
}
