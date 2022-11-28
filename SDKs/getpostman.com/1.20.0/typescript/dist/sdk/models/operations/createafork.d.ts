import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAForkPathParams extends SpeakeasyBase {
    collectionUid: string;
}
export declare class CreateAForkQueryParams extends SpeakeasyBase {
    workspace?: string;
}
export declare class CreateAForkRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class CreateAForkRequest extends SpeakeasyBase {
    pathParams: CreateAForkPathParams;
    queryParams: CreateAForkQueryParams;
    request?: CreateAForkRequestBody;
}
export declare class CreateAForkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
