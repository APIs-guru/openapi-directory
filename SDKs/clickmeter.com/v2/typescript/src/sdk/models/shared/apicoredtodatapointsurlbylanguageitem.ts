import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoDatapointsUrlByLanguageItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
