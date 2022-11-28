import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProjectsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectsIdPathParams;
}


export class GetProjectsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  projectEntity?: shared.ProjectEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
