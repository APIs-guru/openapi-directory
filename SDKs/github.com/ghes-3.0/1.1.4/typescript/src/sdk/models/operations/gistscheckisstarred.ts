import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsCheckIsStarredPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsCheckIsStarredRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsCheckIsStarredPathParams;
}


export class GistsCheckIsStarredResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gistsCheckIsStarred404ApplicationJsonObject?: Map<string, any>;
}
