import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigConfigGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class ConfigConfigGetRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConfigConfigGetHeaders;
}


export class ConfigConfigGetResponse extends SpeakeasyBase {
  @Metadata()
  config?: shared.Config;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
