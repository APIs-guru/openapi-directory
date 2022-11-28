import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSpacePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class DeleteSpaceRequest extends SpeakeasyBase {
    pathParams: DeleteSpacePathParams;
    security: DeleteSpaceSecurity;
}
export declare class DeleteSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
