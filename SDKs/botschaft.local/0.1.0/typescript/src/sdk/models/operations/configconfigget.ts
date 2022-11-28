import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigConfigGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class ConfigConfigGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ConfigConfigGetHeaders;
}


export class ConfigConfigGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  config?: shared.Config;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
