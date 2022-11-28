import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
    organizationName: string;
    receiverName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
    pathParams: GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;
    security: GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
    contentType: string;
    receiver?: shared.Receiver;
    statusCode: number;
}
