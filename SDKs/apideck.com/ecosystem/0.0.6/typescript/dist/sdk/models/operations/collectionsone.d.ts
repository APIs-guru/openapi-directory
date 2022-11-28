import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionsOnePathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class CollectionsOneRequest extends SpeakeasyBase {
    pathParams: CollectionsOnePathParams;
}
export declare class CollectionsOneResponse extends SpeakeasyBase {
    contentType: string;
    getCollectionResponse?: shared.GetCollectionResponse;
    statusCode: number;
}
