import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FileDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview_size" })
  previewSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_previews" })
  withPreviews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" })
  withPriorityColor?: boolean;
}


export class FileDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: FileDownloadQueryParams;
}


export class FileDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileEntity?: shared.FileEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
