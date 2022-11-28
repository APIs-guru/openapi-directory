import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupPadUsingPostQueryParams extends SpeakeasyBase {
    groupId?: string;
    padName?: string;
    text?: string;
}
export declare class CreateGroupPadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateGroupPadUsingPostQueryParams;
}
export declare class CreateGroupPadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupPadUsingPost200ApplicationJsonObject?: CreateGroupPadUsingPost200ApplicationJson;
    createGroupPadUsingPost400ApplicationJsonObject?: CreateGroupPadUsingPost400ApplicationJson;
    createGroupPadUsingPost401ApplicationJsonObject?: CreateGroupPadUsingPost401ApplicationJson;
    createGroupPadUsingPost500ApplicationJsonObject?: CreateGroupPadUsingPost500ApplicationJson;
}
