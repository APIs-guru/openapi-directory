import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateHumanTaskUiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;
}
