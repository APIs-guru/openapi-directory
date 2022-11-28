import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConnectorPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConnectorQueryParams extends SpeakeasyBase {
    includeEvse?: boolean;
    includeOrganization?: boolean;
    includeRate?: boolean;
}
export declare class GetConnectorRequest extends SpeakeasyBase {
    pathParams: GetConnectorPathParams;
    queryParams: GetConnectorQueryParams;
}
export declare class GetConnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
