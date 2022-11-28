import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageModel } from "./languagemodel";



export class ListLanguageModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Models", elemType: LanguageModel })
  models?: LanguageModel[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
