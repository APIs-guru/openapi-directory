import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFoldersPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostFoldersPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFoldersPathPathParams;
}


export class PostFoldersPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileEntity?: shared.FileEntity;

  @Metadata()
  statusCode: number;
}
