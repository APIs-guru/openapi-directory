import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateUserHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    selectedUser: string;
}
export declare class UpdateUserHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: UpdateUserHostedPropertyValuePathParams;
}
export declare class UpdateUserHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
