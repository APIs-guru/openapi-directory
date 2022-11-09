import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextTranslationJobProperties } from "./texttranslationjobproperties";


export class ListTextTranslationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TextTranslationJobPropertiesList", elemType: shared.TextTranslationJobProperties })
  textTranslationJobPropertiesList?: TextTranslationJobProperties[];
}
