import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRemoteServersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetRemoteServersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRemoteServersIdPathParams;
}


export class GetRemoteServersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  remoteServerEntity?: shared.RemoteServerEntity;

  @Metadata()
  statusCode: number;
}
