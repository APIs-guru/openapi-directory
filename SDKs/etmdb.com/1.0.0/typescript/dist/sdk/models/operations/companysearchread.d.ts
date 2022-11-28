import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompanySearchReadPathParams extends SpeakeasyBase {
    companyName: string;
}
export declare class CompanySearchReadRequest extends SpeakeasyBase {
    pathParams: CompanySearchReadPathParams;
}
export declare class CompanySearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
