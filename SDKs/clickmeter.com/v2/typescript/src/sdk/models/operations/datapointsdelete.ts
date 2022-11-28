import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataPointsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DataPointsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataPointsDeletePathParams;
}


export class DataPointsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
