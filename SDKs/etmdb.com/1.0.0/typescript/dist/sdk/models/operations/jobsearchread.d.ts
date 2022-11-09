import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobSearchReadPathParams extends SpeakeasyBase {
    jobTitle: string;
}
export declare class JobSearchReadRequest extends SpeakeasyBase {
    pathParams: JobSearchReadPathParams;
}
export declare class JobSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
