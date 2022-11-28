import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBundleRegistrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundle_id" })
  bundleId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetBundleRegistrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBundleRegistrationsQueryParams;
}


export class GetBundleRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BundleRegistrationEntity })
  bundleRegistrationEntities?: shared.BundleRegistrationEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
