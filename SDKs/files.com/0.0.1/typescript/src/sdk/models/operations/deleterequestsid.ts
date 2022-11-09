import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRequestsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteRequestsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRequestsIdPathParams;
}


export class DeleteRequestsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
