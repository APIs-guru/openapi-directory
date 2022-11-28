import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class PostAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PostAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAddonLinkersLinkerKeyValuesPathParams;

  @SpeakeasyMetadata()
  security: PostAddonLinkersLinkerKeyValuesSecurity;
}


export class PostAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
