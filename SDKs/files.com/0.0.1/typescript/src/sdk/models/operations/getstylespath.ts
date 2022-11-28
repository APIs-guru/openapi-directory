import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStylesPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetStylesPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStylesPathPathParams;
}


export class GetStylesPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  styleEntity?: shared.StyleEntity;
}
