import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBundleRegistrationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bundle_id" })
  bundleId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetBundleRegistrationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBundleRegistrationsQueryParams;
}


export class GetBundleRegistrationsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BundleRegistrationEntity })
  bundleRegistrationEntities?: shared.BundleRegistrationEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
