import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProjectsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectsIdPathParams;
}


export class GetProjectsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  projectEntity?: shared.ProjectEntity;

  @Metadata()
  statusCode: number;
}
