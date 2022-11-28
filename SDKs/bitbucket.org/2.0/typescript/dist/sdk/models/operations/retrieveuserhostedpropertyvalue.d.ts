import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveUserHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    selectedUser: string;
}
export declare class RetrieveUserHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: RetrieveUserHostedPropertyValuePathParams;
}
export declare class RetrieveUserHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
