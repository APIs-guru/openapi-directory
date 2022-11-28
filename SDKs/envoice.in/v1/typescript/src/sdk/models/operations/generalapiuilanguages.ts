import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneralApiUiLanguagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiUiLanguagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GeneralApiUiLanguagesHeaders;
}


export class GeneralApiUiLanguagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UiLanguageDetailsApiModel })
  uiLanguageDetailsApiModels?: shared.UiLanguageDetailsApiModel[];
}
