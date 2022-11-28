import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSessionResponseData extends SpeakeasyBase {
    sessionToken: string;
    sessionUri: string;
}
export declare class CreateSessionResponse extends SpeakeasyBase {
    data: CreateSessionResponseData;
    status: string;
    statusCode: number;
}
