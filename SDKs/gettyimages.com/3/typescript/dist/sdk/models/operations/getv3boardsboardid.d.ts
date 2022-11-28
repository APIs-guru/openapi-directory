import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3BoardsBoardIdPathParams extends SpeakeasyBase {
    boardId: string;
}
export declare class GetV3BoardsBoardIdRequest extends SpeakeasyBase {
    pathParams: GetV3BoardsBoardIdPathParams;
}
export declare class GetV3BoardsBoardIdResponse extends SpeakeasyBase {
    boardDetail?: shared.BoardDetail;
    contentType: string;
    statusCode: number;
}
