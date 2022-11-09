import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRemoteServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetRemoteServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoteServersQueryParams;
}


export class GetRemoteServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteServerEntity })
  remoteServerEntities?: shared.RemoteServerEntity[];

  @Metadata()
  statusCode: number;
}
