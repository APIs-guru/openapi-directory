import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitignoreGetTemplatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class GitignoreGetTemplateRequest extends SpeakeasyBase {
    pathParams: GitignoreGetTemplatePathParams;
}
export declare class GitignoreGetTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gitignoreTemplate?: shared.GitignoreTemplate;
}
