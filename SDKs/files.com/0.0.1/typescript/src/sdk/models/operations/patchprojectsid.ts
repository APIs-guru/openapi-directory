import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchProjectsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchProjectsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=global_access" })
  globalAccess: string;
}


export class PatchProjectsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchProjectsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchProjectsIdRequestBody;
}


export class PatchProjectsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  projectEntity?: shared.ProjectEntity;

  @Metadata()
  statusCode: number;
}
