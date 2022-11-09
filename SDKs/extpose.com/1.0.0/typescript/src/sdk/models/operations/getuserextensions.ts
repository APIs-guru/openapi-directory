import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserExtensionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserExtensionsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetUserExtensionsSecurity;
}


export class GetUserExtensionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Extension })
  extensions?: shared.Extension[];

  @Metadata()
  statusCode: number;
}
