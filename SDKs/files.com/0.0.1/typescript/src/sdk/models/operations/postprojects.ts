import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProjectsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=global_access" })
  globalAccess: string;
}


export class PostProjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostProjectsRequestBody;
}


export class PostProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  projectEntity?: shared.ProjectEntity;

  @Metadata()
  statusCode: number;
}
