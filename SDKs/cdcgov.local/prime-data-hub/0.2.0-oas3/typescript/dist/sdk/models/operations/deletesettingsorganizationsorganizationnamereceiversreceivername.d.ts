import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
    organizationName: string;
    receiverName: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
    pathParams: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;
    security: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
    contentType: string;
    receiver?: shared.Receiver;
    statusCode: number;
}
