import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBundleDownloadsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bundle_id" })
  bundleId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bundle_registration_id" })
  bundleRegistrationId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gt" })
  filterGt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" })
  filterGteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_like" })
  filterLike?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lt" })
  filterLt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" })
  filterLteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetBundleDownloadsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBundleDownloadsQueryParams;
}


export class GetBundleDownloadsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BundleDownloadEntity })
  bundleDownloadEntities?: shared.BundleDownloadEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
