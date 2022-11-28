import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateUsingTemplatePathParams extends SpeakeasyBase {
    templateOwner: string;
    templateRepo: string;
}
export declare class ReposCreateUsingTemplateRequestBody extends SpeakeasyBase {
    description?: string;
    includeAllBranches?: boolean;
    name: string;
    owner?: string;
    private?: boolean;
}
export declare class ReposCreateUsingTemplateRequest extends SpeakeasyBase {
    pathParams: ReposCreateUsingTemplatePathParams;
    request?: ReposCreateUsingTemplateRequestBody;
}
export declare class ReposCreateUsingTemplateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    repository?: shared.Repository;
}
