import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemDownloadablesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItemDownloadablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetItemDownloadablesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemDownloadableRequest;
}


export class GetItemDownloadablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemDownloadableList?: shared.ItemDownloadableList;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
