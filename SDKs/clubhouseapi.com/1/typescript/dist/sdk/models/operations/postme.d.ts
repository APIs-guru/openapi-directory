import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostMeRequest extends SpeakeasyBase {
    request?: Map<string, any>;
}
export declare class PostMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
