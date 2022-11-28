import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1;
    option2?: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams;
    queryParams: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams;
    security: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse extends SpeakeasyBase {
    contentType: string;
    listLinkedAdUnitsResponse?: shared.ListLinkedAdUnitsResponse;
    statusCode: number;
}
