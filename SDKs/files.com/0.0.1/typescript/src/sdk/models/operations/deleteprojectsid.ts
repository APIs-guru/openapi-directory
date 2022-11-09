import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProjectsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectsIdPathParams;
}


export class DeleteProjectsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
