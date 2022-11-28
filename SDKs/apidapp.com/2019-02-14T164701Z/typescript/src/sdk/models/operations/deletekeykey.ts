import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteKeyKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class DeleteKeyKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteKeyKeyPathParams;
}


export class DeleteKeyKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
