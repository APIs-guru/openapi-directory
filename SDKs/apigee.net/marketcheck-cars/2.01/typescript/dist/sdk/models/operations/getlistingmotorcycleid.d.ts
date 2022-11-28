import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingMotorcycleIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingMotorcycleIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingMotorcycleIdRequest extends SpeakeasyBase {
    pathParams: GetListingMotorcycleIdPathParams;
    queryParams: GetListingMotorcycleIdQueryParams;
}
export declare class GetListingMotorcycleIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    motorcycleListing?: shared.MotorcycleListing;
    statusCode: number;
}
