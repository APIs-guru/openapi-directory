import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeaveSpacePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LeaveSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class LeaveSpaceRequest extends SpeakeasyBase {
    pathParams: LeaveSpacePathParams;
    security: LeaveSpaceSecurity;
}
export declare class LeaveSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
