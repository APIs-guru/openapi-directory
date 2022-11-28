import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestRenderEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class TestRenderEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestRenderEmailTemplateRequestBody extends SpeakeasyBase {
    templateData: string;
}
export declare class TestRenderEmailTemplateRequest extends SpeakeasyBase {
    pathParams: TestRenderEmailTemplatePathParams;
    headers: TestRenderEmailTemplateHeaders;
    request: TestRenderEmailTemplateRequestBody;
}
export declare class TestRenderEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    testRenderEmailTemplateResponse?: shared.TestRenderEmailTemplateResponse;
    tooManyRequestsException?: any;
}
