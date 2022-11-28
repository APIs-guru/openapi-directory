import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemotestopRequestBody extends SpeakeasyBase {
    chargestation?: string;
    driver?: string;
    transaction?: string;
}
export declare class RemotestopRequest extends SpeakeasyBase {
    request: RemotestopRequestBody;
}
export declare class RemotestopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
