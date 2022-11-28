import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class GetUsersMeUserContactV2UserContactV2Merchant extends SpeakeasyBase {
    id?: number;
}
export declare class GetUsersMeUserContactV2UserContactV2 extends SpeakeasyBase {
    apiKey?: string;
    contactInfo?: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    createDate?: Date;
    deptLeader?: boolean;
    id: number;
    merchant?: GetUsersMeUserContactV2UserContactV2Merchant;
    name?: string;
    status?: boolean;
    updatedAt?: Date;
    updatedBy?: Date;
    username?: string;
}
export declare class GetUsersMeUserContactV2Merchant extends SpeakeasyBase {
    id?: number;
}
export declare class GetUsersMeUserContactV2 extends SpeakeasyBase {
    apiKey?: string;
    contactInfo?: GetUsersMeUserContactV2UserContactV2;
    createDate?: Date;
    deptLeader?: boolean;
    id: number;
    merchant?: GetUsersMeUserContactV2Merchant;
    name?: string;
    status?: boolean;
    updatedAt?: Date;
    updatedBy?: Date;
    username?: string;
}
export declare class GetUsersMeRequest extends SpeakeasyBase {
    security: GetUsersMeSecurity;
}
export declare class GetUsersMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userContactV2?: GetUsersMeUserContactV2;
}
