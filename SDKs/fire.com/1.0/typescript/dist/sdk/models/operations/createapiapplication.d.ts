import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateApiApplicationNewApiApplication extends SpeakeasyBase {
    applicationName?: string;
    enabled?: boolean;
    expiry?: Date;
    ican?: number;
    numberOfPayeeApprovalsRequired?: number;
    numberOfPaymentApprovalsRequired?: number;
    permissions?: string[];
}
export declare class CreateApiApplicationApiApplication extends SpeakeasyBase {
    applicationId?: number;
    clientId?: string;
    clientKey?: string;
    enabled?: boolean;
    expiry?: Date;
    ican?: number;
    numberOfPayeeApprovalsRequired?: number;
    numberOfPaymentApprovalsRequired?: number;
    refreshToken?: string;
}
export declare class CreateApiApplicationRequest extends SpeakeasyBase {
    request: CreateApiApplicationNewApiApplication;
}
export declare class CreateApiApplicationResponse extends SpeakeasyBase {
    apiApplication?: CreateApiApplicationApiApplication;
    contentType: string;
    statusCode: number;
}
