import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextTranslationJobProperties } from "./texttranslationjobproperties";



export class DescribeTextTranslationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TextTranslationJobProperties" })
  textTranslationJobProperties?: TextTranslationJobProperties;
}
