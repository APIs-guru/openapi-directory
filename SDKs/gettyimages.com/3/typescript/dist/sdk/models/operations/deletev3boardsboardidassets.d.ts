import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteV3BoardsBoardIdAssetsPathParams extends SpeakeasyBase {
    boardId: string;
}
export declare class DeleteV3BoardsBoardIdAssetsQueryParams extends SpeakeasyBase {
    assetIds?: string[];
}
export declare class DeleteV3BoardsBoardIdAssetsRequest extends SpeakeasyBase {
    pathParams: DeleteV3BoardsBoardIdAssetsPathParams;
    queryParams: DeleteV3BoardsBoardIdAssetsQueryParams;
}
export declare class DeleteV3BoardsBoardIdAssetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
