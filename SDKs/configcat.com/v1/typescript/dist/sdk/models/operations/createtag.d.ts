import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateTagPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class CreateTagRequests extends SpeakeasyBase {
    createTagModel?: shared.CreateTagModel;
    createTagModel1?: shared.CreateTagModel;
    createTagModel2?: shared.CreateTagModel;
}
export declare class CreateTagRequest extends SpeakeasyBase {
    pathParams: CreateTagPathParams;
    request: CreateTagRequests;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagModel?: shared.TagModel;
    tagModelHaljson?: shared.TagModelHaljson;
}
