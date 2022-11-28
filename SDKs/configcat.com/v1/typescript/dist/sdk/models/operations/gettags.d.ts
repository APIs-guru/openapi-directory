import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    pathParams: GetTagsPathParams;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagModelHaljsons?: shared.TagModelHaljson[];
    tagModels?: shared.TagModel[];
}
