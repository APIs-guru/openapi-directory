import { SpeakeasyBase } from "../../../internal/utils";
export declare class IssuesDeleteLabelPathParams extends SpeakeasyBase {
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesDeleteLabelRequest extends SpeakeasyBase {
    pathParams: IssuesDeleteLabelPathParams;
}
export declare class IssuesDeleteLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
