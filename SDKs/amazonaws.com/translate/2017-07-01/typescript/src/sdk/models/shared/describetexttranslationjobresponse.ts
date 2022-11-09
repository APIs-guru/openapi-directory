import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextTranslationJobProperties } from "./texttranslationjobproperties";


export class DescribeTextTranslationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TextTranslationJobProperties" })
  textTranslationJobProperties?: TextTranslationJobProperties;
}
