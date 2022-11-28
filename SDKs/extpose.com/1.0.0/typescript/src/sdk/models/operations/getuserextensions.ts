import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserExtensionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserExtensionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetUserExtensionsSecurity;
}


export class GetUserExtensionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Extension })
  extensions?: shared.Extension[];

  @SpeakeasyMetadata()
  statusCode: number;
}
