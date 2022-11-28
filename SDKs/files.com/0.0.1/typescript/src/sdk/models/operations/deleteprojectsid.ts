import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProjectsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectsIdPathParams;
}


export class DeleteProjectsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
