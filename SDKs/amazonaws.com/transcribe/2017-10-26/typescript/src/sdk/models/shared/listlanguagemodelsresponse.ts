import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageModel } from "./languagemodel";


export class ListLanguageModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Models", elemType: shared.LanguageModel })
  models?: LanguageModel[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
