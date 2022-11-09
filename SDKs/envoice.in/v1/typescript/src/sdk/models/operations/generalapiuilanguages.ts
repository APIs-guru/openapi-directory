import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneralApiUiLanguagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiUiLanguagesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GeneralApiUiLanguagesHeaders;
}


export class GeneralApiUiLanguagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UiLanguageDetailsApiModel })
  uiLanguageDetailsApiModels?: shared.UiLanguageDetailsApiModel[];
}
