import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateTagPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class UpdateTagRequests extends SpeakeasyBase {
    updateTagModel?: shared.UpdateTagModel;
    updateTagModel1?: shared.UpdateTagModel;
    updateTagModel2?: shared.UpdateTagModel;
}
export declare class UpdateTagRequest extends SpeakeasyBase {
    pathParams: UpdateTagPathParams;
    request: UpdateTagRequests;
}
export declare class UpdateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagModel?: shared.TagModel;
    tagModelHaljson?: shared.TagModelHaljson;
}
