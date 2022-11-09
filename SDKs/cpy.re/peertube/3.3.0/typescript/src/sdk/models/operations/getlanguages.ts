import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLanguagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLanguages200ApplicationJsonStrings?: string[];
}
