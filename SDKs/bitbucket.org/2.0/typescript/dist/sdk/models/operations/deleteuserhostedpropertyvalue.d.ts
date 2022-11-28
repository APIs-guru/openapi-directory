import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUserHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    selectedUser: string;
}
export declare class DeleteUserHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: DeleteUserHostedPropertyValuePathParams;
}
export declare class DeleteUserHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
