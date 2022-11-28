import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class GetTagRequest extends SpeakeasyBase {
    pathParams: GetTagPathParams;
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagModel?: shared.TagModel;
    tagModelHaljson?: shared.TagModelHaljson;
}
