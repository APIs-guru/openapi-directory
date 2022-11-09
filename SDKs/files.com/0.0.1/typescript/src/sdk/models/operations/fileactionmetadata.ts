import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileActionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=preview_size" })
  previewSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=with_previews" })
  withPreviews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" })
  withPriorityColor?: boolean;
}


export class FileActionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileActionMetadataPathParams;

  @Metadata()
  queryParams: FileActionMetadataQueryParams;
}


export class FileActionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileEntity?: shared.FileEntity;

  @Metadata()
  statusCode: number;
}
