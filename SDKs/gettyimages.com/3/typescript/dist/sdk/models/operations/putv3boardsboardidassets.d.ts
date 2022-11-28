import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutV3BoardsBoardIdAssetsPathParams extends SpeakeasyBase {
    boardId: string;
}
export declare class PutV3BoardsBoardIdAssetsRequest extends SpeakeasyBase {
    pathParams: PutV3BoardsBoardIdAssetsPathParams;
    request?: shared.BoardAsset[];
}
export declare class PutV3BoardsBoardIdAssetsResponse extends SpeakeasyBase {
    addBoardAssetsResult?: shared.AddBoardAssetsResult;
    contentType: string;
    statusCode: number;
}
