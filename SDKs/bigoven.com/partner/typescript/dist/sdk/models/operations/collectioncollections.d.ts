import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionCollectionsQueryParams extends SpeakeasyBase {
    test?: string;
}
export declare class CollectionCollectionsRequest extends SpeakeasyBase {
    queryParams: CollectionCollectionsQueryParams;
}
export declare class CollectionCollectionsResponse extends SpeakeasyBase {
    bigOvenModelApi2CollectionInfos?: shared.BigOvenModelApi2CollectionInfo[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
