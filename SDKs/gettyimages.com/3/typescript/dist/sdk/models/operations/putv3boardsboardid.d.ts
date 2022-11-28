import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutV3BoardsBoardIdPathParams extends SpeakeasyBase {
    boardId: string;
}
export declare class PutV3BoardsBoardIdRequest extends SpeakeasyBase {
    pathParams: PutV3BoardsBoardIdPathParams;
    request?: shared.BoardInfo;
}
export declare class PutV3BoardsBoardIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
