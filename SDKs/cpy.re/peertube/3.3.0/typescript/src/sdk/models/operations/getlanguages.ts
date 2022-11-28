import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLanguagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLanguages200ApplicationJsonStrings?: string[];
}
