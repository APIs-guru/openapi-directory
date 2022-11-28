import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFoldersPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostFoldersPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFoldersPathPathParams;
}


export class PostFoldersPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileEntity?: shared.FileEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
