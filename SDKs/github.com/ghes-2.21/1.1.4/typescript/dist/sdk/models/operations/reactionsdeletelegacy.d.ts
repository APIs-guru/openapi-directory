import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsDeleteLegacyPathParams extends SpeakeasyBase {
    reactionId: number;
}
export declare class ReactionsDeleteLegacy415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsDeleteLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteLegacyPathParams;
}
export declare class ReactionsDeleteLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reactionsDeleteLegacy415ApplicationJsonObject?: ReactionsDeleteLegacy415ApplicationJson;
}
