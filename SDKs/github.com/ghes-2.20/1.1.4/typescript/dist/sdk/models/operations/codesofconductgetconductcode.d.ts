import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodesOfConductGetConductCodePathParams extends SpeakeasyBase {
    key: string;
}
export declare class CodesOfConductGetConductCode415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class CodesOfConductGetConductCodeRequest extends SpeakeasyBase {
    pathParams: CodesOfConductGetConductCodePathParams;
}
export declare class CodesOfConductGetConductCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeOfConduct?: shared.CodeOfConduct;
    codesOfConductGetConductCode415ApplicationJsonObject?: CodesOfConductGetConductCode415ApplicationJson;
}
