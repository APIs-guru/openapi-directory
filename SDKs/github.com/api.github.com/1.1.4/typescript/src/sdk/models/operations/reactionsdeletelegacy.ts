import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsDeleteLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;
}


export class ReactionsDeleteLegacy415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsDeleteLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsDeleteLegacyPathParams;
}


export class ReactionsDeleteLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  reactionsDeleteLegacy415ApplicationJsonObject?: ReactionsDeleteLegacy415ApplicationJson;
}
