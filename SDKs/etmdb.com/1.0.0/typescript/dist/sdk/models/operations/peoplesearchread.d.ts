import { SpeakeasyBase } from "../../../internal/utils";
export declare class PeopleSearchReadPathParams extends SpeakeasyBase {
    user: string;
}
export declare class PeopleSearchReadRequest extends SpeakeasyBase {
    pathParams: PeopleSearchReadPathParams;
}
export declare class PeopleSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
