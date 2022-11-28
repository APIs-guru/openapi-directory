import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConfigurationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConfigurationRequest extends SpeakeasyBase {
    pathParams: GetConfigurationPathParams;
}
export declare class GetConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
