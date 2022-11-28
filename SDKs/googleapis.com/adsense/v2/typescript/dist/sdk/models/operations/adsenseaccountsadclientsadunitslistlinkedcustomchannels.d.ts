import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1;
    option2?: AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption2;
}
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsPathParams;
    queryParams: AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsQueryParams;
    security: AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity;
}
export declare class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse extends SpeakeasyBase {
    contentType: string;
    listLinkedCustomChannelsResponse?: shared.ListLinkedCustomChannelsResponse;
    statusCode: number;
}
