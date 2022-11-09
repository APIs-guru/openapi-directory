import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageModel } from "./languagemodel";


export class DescribeLanguageModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageModel" })
  languageModel?: LanguageModel;
}
