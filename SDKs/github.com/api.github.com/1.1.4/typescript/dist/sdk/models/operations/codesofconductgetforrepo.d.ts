import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodesOfConductGetForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class CodesOfConductGetForRepoRequest extends SpeakeasyBase {
    pathParams: CodesOfConductGetForRepoPathParams;
}
export declare class CodesOfConductGetForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    codeOfConduct?: shared.CodeOfConduct;
}
