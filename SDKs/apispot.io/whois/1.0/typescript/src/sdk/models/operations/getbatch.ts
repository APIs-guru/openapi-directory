import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBatchPathParams;
}


export class GetBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batch?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
