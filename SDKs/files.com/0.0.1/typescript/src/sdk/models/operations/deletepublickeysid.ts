import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePublicKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePublicKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePublicKeysIdPathParams;
}


export class DeletePublicKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
