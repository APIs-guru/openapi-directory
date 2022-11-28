import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsTagIdPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class GetTagsTagIdRequest extends SpeakeasyBase {
    pathParams: GetTagsTagIdPathParams;
}
export declare class GetTagsTagIdResponse extends SpeakeasyBase {
    apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;
    contentType: string;
    statusCode: number;
}
