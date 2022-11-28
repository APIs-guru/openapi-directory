import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRemoteServersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetRemoteServersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRemoteServersIdPathParams;
}


export class GetRemoteServersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  remoteServerEntity?: shared.RemoteServerEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
