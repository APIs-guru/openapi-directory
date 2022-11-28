import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3CollectionsHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3CollectionsRequest extends SpeakeasyBase {
    headers: GetV3CollectionsHeaders;
}
export declare class GetV3CollectionsResponse extends SpeakeasyBase {
    collectionsList?: shared.CollectionsList;
    contentType: string;
    statusCode: number;
}
