import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageModel } from "./languagemodel";



export class DescribeLanguageModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageModel" })
  languageModel?: LanguageModel;
}
