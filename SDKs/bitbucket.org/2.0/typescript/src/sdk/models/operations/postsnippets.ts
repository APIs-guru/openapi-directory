import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSnippetsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostSnippetsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostSnippetsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostSnippetsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostSnippetsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostSnippetsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostSnippetsSecurityOption3;
}


export class PostSnippetsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostSnippetsSecurity;
}


export class PostSnippetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  snippet?: Map<string, any>;
}
