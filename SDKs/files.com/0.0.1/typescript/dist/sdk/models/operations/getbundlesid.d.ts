import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundlesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetBundlesIdRequest extends SpeakeasyBase {
    pathParams: GetBundlesIdPathParams;
}
export declare class GetBundlesIdResponse extends SpeakeasyBase {
    bundleEntity?: shared.BundleEntity;
    contentType: string;
    statusCode: number;
}
