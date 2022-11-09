import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemDownloadablesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItemDownloadablesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItemDownloadablesQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemDownloadableRequest;
}


export class GetItemDownloadablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemDownloadableList?: shared.ItemDownloadableList;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
