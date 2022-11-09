import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRemoteServersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteRemoteServersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRemoteServersIdPathParams;
}


export class DeleteRemoteServersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
