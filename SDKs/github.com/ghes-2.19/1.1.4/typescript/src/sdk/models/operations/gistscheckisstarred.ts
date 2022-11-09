import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsCheckIsStarredPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsCheckIsStarredRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsCheckIsStarredPathParams;
}


export class GistsCheckIsStarredResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistsCheckIsStarred404ApplicationJsonObject?: Map<string, any>;
}
