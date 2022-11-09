import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemsMediaClipFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItemsMediaClipFilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItemsMediaClipFilesQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemDownloadableRequest;
}


export class GetItemsMediaClipFilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemClipFilesList?: shared.ItemClipFilesList;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
