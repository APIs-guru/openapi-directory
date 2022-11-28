import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextTranslationJobProperties } from "./texttranslationjobproperties";



export class ListTextTranslationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TextTranslationJobPropertiesList", elemType: TextTranslationJobProperties })
  textTranslationJobPropertiesList?: TextTranslationJobProperties[];
}
