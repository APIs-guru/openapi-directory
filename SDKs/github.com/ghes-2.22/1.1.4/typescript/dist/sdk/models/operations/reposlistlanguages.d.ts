import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposListLanguagesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListLanguagesRequest extends SpeakeasyBase {
    pathParams: ReposListLanguagesPathParams;
}
export declare class ReposListLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    language?: Map<string, number>;
}
