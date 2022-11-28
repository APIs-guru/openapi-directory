import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionGetCollectionMetaPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CollectionGetCollectionMetaRequest extends SpeakeasyBase {
    pathParams: CollectionGetCollectionMetaPathParams;
}
export declare class CollectionGetCollectionMetaResponse extends SpeakeasyBase {
    bigOvenModelApi2CollectionInfo?: shared.BigOvenModelApi2CollectionInfo;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
