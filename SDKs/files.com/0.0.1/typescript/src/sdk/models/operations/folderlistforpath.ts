import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FolderListForPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FolderListForPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview_size" })
  previewSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_all" })
  searchAll?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_previews" })
  withPreviews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" })
  withPriorityColor?: boolean;
}


export class FolderListForPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FolderListForPathPathParams;

  @SpeakeasyMetadata()
  queryParams: FolderListForPathQueryParams;
}


export class FolderListForPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FileEntity })
  fileEntities?: shared.FileEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
