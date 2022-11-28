import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundleRegistrationsQueryParams extends SpeakeasyBase {
    bundleId?: number;
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetBundleRegistrationsRequest extends SpeakeasyBase {
    queryParams: GetBundleRegistrationsQueryParams;
}
export declare class GetBundleRegistrationsResponse extends SpeakeasyBase {
    bundleRegistrationEntities?: shared.BundleRegistrationEntity[];
    contentType: string;
    statusCode: number;
}
