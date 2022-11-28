import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRemoteServersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetRemoteServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoteServersQueryParams;
}


export class GetRemoteServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteServerEntity })
  remoteServerEntities?: shared.RemoteServerEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
