import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRemoteServersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteRemoteServersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRemoteServersIdPathParams;
}


export class DeleteRemoteServersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
