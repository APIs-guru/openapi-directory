import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServerBlocklistServersQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetServerBlocklistServersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetServerBlocklistServersRequest extends SpeakeasyBase {
    queryParams: GetServerBlocklistServersQueryParams;
    security: GetServerBlocklistServersSecurity;
}
export declare class GetServerBlocklistServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
