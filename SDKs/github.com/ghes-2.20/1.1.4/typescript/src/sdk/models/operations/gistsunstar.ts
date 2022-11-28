import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsUnstarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsUnstarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsUnstarPathParams;
}


export class GistsUnstarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
