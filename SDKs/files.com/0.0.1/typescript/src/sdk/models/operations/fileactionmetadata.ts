import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FileActionMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview_size" })
  previewSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_previews" })
  withPreviews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" })
  withPriorityColor?: boolean;
}


export class FileActionMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileActionMetadataPathParams;

  @SpeakeasyMetadata()
  queryParams: FileActionMetadataQueryParams;
}


export class FileActionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileEntity?: shared.FileEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
