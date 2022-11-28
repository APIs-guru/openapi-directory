import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchProjectsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchProjectsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=global_access" })
  globalAccess: string;
}


export class PatchProjectsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchProjectsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchProjectsIdRequestBody;
}


export class PatchProjectsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  projectEntity?: shared.ProjectEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
