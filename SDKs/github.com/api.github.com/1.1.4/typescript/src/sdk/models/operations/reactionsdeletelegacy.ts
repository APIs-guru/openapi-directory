import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsDeleteLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;
}


export class ReactionsDeleteLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeleteLegacyPathParams;
}


export class ReactionsDeleteLegacy415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsDeleteLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reactionsDeleteLegacy415ApplicationJsonObject?: ReactionsDeleteLegacy415ApplicationJson;
}
