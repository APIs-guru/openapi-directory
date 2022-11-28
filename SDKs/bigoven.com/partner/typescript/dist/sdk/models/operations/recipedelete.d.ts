import { SpeakeasyBase } from "../../../internal/utils";
export declare class RecipeDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class RecipeDeleteRequest extends SpeakeasyBase {
    pathParams: RecipeDeletePathParams;
}
export declare class RecipeDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
