import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeletePathParams extends SpeakeasyBase {
    reactionId: number;
}
export declare class ReactionsDeleteHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReactionsDeleteRequest extends SpeakeasyBase {
    pathParams: ReactionsDeletePathParams;
    headers: ReactionsDeleteHeaders;
}
export declare class ReactionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
