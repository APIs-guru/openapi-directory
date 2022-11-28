import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherApplicationsDeviceTierConfigsListPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherApplicationsDeviceTierConfigsListPathParams;
    queryParams: AndroidpublisherApplicationsDeviceTierConfigsListQueryParams;
    security: AndroidpublisherApplicationsDeviceTierConfigsListSecurity;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceTierConfigsResponse?: shared.ListDeviceTierConfigsResponse;
    statusCode: number;
}
