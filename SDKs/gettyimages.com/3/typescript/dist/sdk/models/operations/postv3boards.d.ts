import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostV3BoardsRequest extends SpeakeasyBase {
    request?: shared.BoardInfo;
}
export declare class PostV3BoardsResponse extends SpeakeasyBase {
    boardCreated?: shared.BoardCreated;
    contentType: string;
    statusCode: number;
}
