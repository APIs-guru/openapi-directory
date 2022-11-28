import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
    organizationName: string;
    receiverName: string;
}
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
    pathParams: PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;
    request?: shared.ReceiverInput;
    security: PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
    contentType: string;
    receiver?: shared.Receiver;
    statusCode: number;
}
