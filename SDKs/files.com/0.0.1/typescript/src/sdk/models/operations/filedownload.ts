import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileDownloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preview_size" })
  previewSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=with_previews" })
  withPreviews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" })
  withPriorityColor?: boolean;
}


export class FileDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileDownloadPathParams;

  @Metadata()
  queryParams: FileDownloadQueryParams;
}


export class FileDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileEntity?: shared.FileEntity;

  @Metadata()
  statusCode: number;
}
